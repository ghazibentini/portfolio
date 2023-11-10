import { motion } from "framer-motion";

const test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileHover={{ opacity: 1, scale: 2 }}
      ></motion.div>
    </div>
  );
};

export default test;
