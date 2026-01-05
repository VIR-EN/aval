import type { Variants } from "framer-motion";

export const reveal: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: (d: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: d,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};
