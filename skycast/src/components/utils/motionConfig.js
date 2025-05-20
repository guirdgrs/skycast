export const navbarAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 60 }
}

export const hoverAnimation = {
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 160 }
}

export const hoverSmallAnimation = {
    whileHover: { scale: 1.03 },
    transition: { type: "spring", stiffness: 120 }
}

export const entryAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}