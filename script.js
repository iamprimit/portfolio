function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// Smooth Scrolling Effect
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
