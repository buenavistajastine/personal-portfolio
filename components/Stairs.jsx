import { motion } from "framer-motion";

// Slide-to-left animation configuration
const slideAnimation = {
  animate: {
    x: "-100%",  // Slide out to the left side of the viewport
    backgroundColor: "#000000",  // Change this to your current background color
  },
  initial: {
    x: "0%",  // Start at the original position
    backgroundColor: "#ffffff",  // Start with a white background
  },
};

const Stairs = () => {
  return (
    <>
      {/* Render a single motion div that slides to the left */}
      <motion.div
        initial={slideAnimation.initial}
        animate={slideAnimation.animate}
        transition={{
          x: { duration: 0.4, ease: "easeInOut" },  // Slide transition
          backgroundColor: { duration: 0.4, ease: "easeInOut" },  // Background color transition
        }}
        className="h-full w-full relative"  // Full width and height
      />
    </>
  );
};

export default Stairs;
