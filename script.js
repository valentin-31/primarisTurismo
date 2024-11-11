// Función para abrir y cerrar modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};

// Suavizar el desplazamiento en enlaces internos
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Función para abrir el menú lateral
function openNav() {
    document.getElementById("side-nav").classList.add("open");
}

// Función para cerrar el menú lateral
function closeNav() {
    document.getElementById("side-nav").classList.remove("open");
}

// Toggle para abrir/cerrar el menú lateral con el botón de menú
document.getElementById("menu-toggle").addEventListener("click", function(event) {
    const sideNav = document.getElementById("side-nav");
    sideNav.classList.toggle("open");
    event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
});

// Cerrar el menú lateral al hacer clic fuera de él
document.addEventListener("click", function(event) {
    const sideNav = document.getElementById("side-nav");
    const menuToggle = document.getElementById("menu-toggle");

    // Verifica si el menú está abierto y si el clic fue fuera del menú o del botón de menú
    if (sideNav.classList.contains("open") && !sideNav.contains(event.target) && event.target !== menuToggle) {
        closeNav();
    }
});
