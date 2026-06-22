import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type FloatingAssetProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  distance?: number;
};

export function FloatingAsset({ children, distance = 8, ...props }: FloatingAssetProps) {
  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
