// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================
// Hero fade-out on scroll
// (Para revertir: comentar desde aquí hasta la línea que dice "FIN Hero fade-out")
// ========================================
const heroSection = document.querySelector('.hero');
let ticking = false;

function updateHeroOpacity() {
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // Calcular opacidad: empieza a desvanecerse después de 200px de scroll
    // Se desvanece completamente después de scrollear 80% del hero
    const fadeStart = 200;
    const fadeEnd = heroHeight * 0.8;

    if (scrollPosition <= fadeStart) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    } else if (scrollPosition >= fadeEnd) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(-100px)';
        heroSection.style.pointerEvents = 'none';
    } else {
        // Interpolación suave entre fadeStart y fadeEnd
        const fadeProgress = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        const opacity = 1 - fadeProgress;
        const translateY = -(fadeProgress * 100); // Se mueve hacia arriba hasta -100px

        heroSection.style.opacity = opacity.toString();
        heroSection.style.transform = `translateY(${translateY}px)`;
        heroSection.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    }

    ticking = false;
}

// Optimizar con requestAnimationFrame
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeroOpacity();
        });
        ticking = true;
    }
});

// Inicializar al cargar
updateHeroOpacity();
// ======================================== FIN Hero fade-out

// Form submission
const quoteForm = document.getElementById('quoteForm');
const formMessage = document.getElementById('formMessage');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Recoger datos del formulario
    const formData = new FormData(quoteForm);

    // Obtener valores
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const telefono = formData.get('telefono');
    const ubicacion = formData.get('ubicacion');
    const tipoEmbarcacion = formData.get('tipoEmbarcacion');
    const eslora = parseFloat(formData.get('eslora'));
    const manga = parseFloat(formData.get('manga'));
    const anio = formData.get('anio');
    const materialCasco = formData.get('materialCasco');
    const descripcion = formData.get('descripcion');

    // Calcular m2
    const m2 = (eslora * manga * 2).toFixed(2);

    // Recoger servicios seleccionados
    const servicios = [];
    formData.getAll('servicios').forEach(servicio => {
        const servicioNombres = {
            'limpieza-exterior': 'Limpieza Exterior',
            'limpieza-interior': 'Limpieza Interior',
            'pulido': 'Pulido de Casco',
            'tapiceria': 'Tapicería',
            'motor': 'Limpieza Motor',
            'servicio-completo': 'Servicio al Completo'
        };
        servicios.push(servicioNombres[servicio] || servicio);
    });

    // Crear mensaje para WhatsApp
    let mensaje = `*Solicitud de Presupuesto - Master Clean Yatch*\n\n`;
    mensaje += `*DATOS DE CONTACTO*\n`;
    mensaje += `Nombre: ${nombre}\n`;
    mensaje += `Email: ${email}\n`;
    mensaje += `Teléfono: ${telefono}\n`;
    mensaje += `Ubicación: ${ubicacion}\n\n`;

    mensaje += `*DATOS DE LA EMBARCACIÓN*\n`;
    mensaje += `Tipo: ${tipoEmbarcacion}\n`;
    mensaje += `Eslora: ${eslora} metros\n`;
    mensaje += `Manga: ${manga} metros\n`;
    mensaje += `📐 *Superficie total: ${m2} m²*\n`;
    if (anio) mensaje += `Año: ${anio}\n`;
    if (materialCasco) mensaje += `Material del casco: ${materialCasco}\n`;

    if (servicios.length > 0) {
        mensaje += `\n*SERVICIOS SOLICITADOS*\n`;
        servicios.forEach(servicio => {
            mensaje += `✓ ${servicio}\n`;
        });
    }

    if (descripcion) {
        mensaje += `\n*DETALLES ADICIONALES*\n${descripcion}`;
    }

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroWhatsApp = '34646551404';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Mostrar mensaje de confirmación
    formMessage.textContent = '✅ Redirigiendo a WhatsApp...';
    formMessage.className = 'form-message success';
    formMessage.style.display = 'block';

    // Limpiar formulario
    setTimeout(() => {
        quoteForm.reset();
        formMessage.style.display = 'none';
    }, 2000);
});

// Animaciones al hacer scroll (opcional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas
document.querySelectorAll('.service-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Lógica para "Servicio al Completo"
const servicioCompletoCheckbox = document.getElementById('servicio-completo');
const otrosServiciosCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:not(#servicio-completo)');

servicioCompletoCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // Deshabilitar y desmarcar otros servicios
        otrosServiciosCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.disabled = true;
            checkbox.parentElement.classList.add('disabled');
        });
    } else {
        // Habilitar otros servicios
        otrosServiciosCheckboxes.forEach(checkbox => {
            checkbox.disabled = false;
            checkbox.parentElement.classList.remove('disabled');
        });
    }
});

// Si otro servicio se marca, desmarcar "Servicio al Completo"
otrosServiciosCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked && servicioCompletoCheckbox.checked) {
            servicioCompletoCheckbox.checked = false;
        }
    });
});
