import "./parallax.scss";
import {motion} from "framer-motion";

const parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d )"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1>{type === "services" ? "What I Do" : "What I Did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};

export default parallax;
