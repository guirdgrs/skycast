export const navbarAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 60 }
}

export const hoverAnimation = {
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 160 }
}