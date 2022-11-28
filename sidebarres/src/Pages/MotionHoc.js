//higher order component to add same functionality to each page

import { motion } from "framer-motion";

const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <motion.div
        initial={{ y: 1000 }}
        animate={{
          y: 0,
          transition: { duration: 0.9, type: "spring" ,ease: "easeInOut" },
        }}
   
      >
        <Component />
      </motion.div>
    );
  };
};

export default MotionHoc;
