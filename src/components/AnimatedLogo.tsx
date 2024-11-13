import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: FunctionComponent<AnimatedLogoProps> = ({
  className = "text-4xl font-bold",
}) => {
  return (
    <h1 className={className}>
      Rastre
      <motion.span
        initial={{ color: "#3B82F6" }}
        animate={{
          color: ["#3B82F6", "#10B981", "#6366F1", "#EC4899", "#3B82F6"],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        IA
      </motion.span>
    </h1>
  );
};

export default AnimatedLogo;
