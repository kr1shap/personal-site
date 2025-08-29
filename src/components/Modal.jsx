import LargeCard from "../components/LargeCard";
import { motion } from "framer-motion";
import HoverLink from "./HoverLink";

// type prop = {
//   onClose: () => void;
//   url: string;
// };

function Overlay(props) {
  
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-50 ease-in-out transition-colors">
        <button
          onClick={props.onClose}
          className="absolute top-2 right-3 text-purple-100 hover:text-purple-200/80 ease-in-out text-xl extraSmall:text-2xl font-bold"
        >
          &times;
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.01 }}
          transition={{
            type: "spring",
            stiffness: 99,
            damping: 20,
            mass: 0.5,
          }}
        >
          {!props.isExp && (<HoverLink/>)}
          <LargeCard data={props.data} />
        </motion.div>
      </div>
    </>
  );
}

export default Overlay;
