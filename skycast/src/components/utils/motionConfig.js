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

export const modalAnimation = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } },
};

export const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeOutAnimation = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 1 },
};

export const fadeSlideAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};