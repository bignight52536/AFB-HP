// Initialize Lenis for smooth scroll feeling
const lenis = new Lenis({
    duration: 1.2, // smoothness speed
    smooth: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// Optional: smooth scroll when clicking nav links
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) lenis.scrollTo(target, { offset: -60 }); // offset for header height
    });
});
const hamburger = document.querySelector('.hamburger');
const menuContent = document.querySelector('.hamburger-menu-content');
const links = menuContent.querySelectorAll('.nav-link')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
})
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
    });
});