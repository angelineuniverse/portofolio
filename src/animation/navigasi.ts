export function animasiNavigasi(tl) {
    tl.fromTo(
        ".menu",
        {
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "expo.in",
            stagger: {
                from: "center",
                each: 0.2,
            },
        }
    );
}