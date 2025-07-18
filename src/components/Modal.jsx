import LargeCard from "../components/LargeCard";
import { motion } from "framer-motion";
// type prop = {
//   onClose: () => void;
//   url: string;
// };

function Overlay(props) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-50">
        <button
          onClick={props.onClose}
          className="absolute top-2 right-3 text-purple-100 hover:text-purple-200/80 text-3xl extraSmall:text-5xl font-bold"
        >
          &times;
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LargeCard
            data={props.data}
          />
        </motion.div>
      </div>
    </>
  );
}

export default Overlay;
