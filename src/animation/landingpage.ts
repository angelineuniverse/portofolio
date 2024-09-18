export function animasiLandingPage(tl) {
    tl.fromTo(
        ".title div",
        { opacity: 0, y: 30 },
        { y: 0, opacity: 1, duration: 0.15, stagger: 0.1 }
    ).fromTo(
        ".since",
        { opacity: 0, y: 30 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4 }
    ).fromTo(
        ".item-rounded",
        {
            scale: 0,
        },
        {
            scale: 100,
            delay: 1,
            duration: 1.2,
            ease: "power1.in",
        }
    ).to(".dashboard", {
        display: "none",
        duration: 0,
    });
}