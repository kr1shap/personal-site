import { motion } from "framer-motion";

function HoverLink() {
  return (
    <motion.div className="relative max-w-xs w-[80%]"
          animate={{ y: [0, -4, 0] }} // up and down
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
      <div
        className="absolute left-4 -bottom-2 w-0 h-0 
               border-l-[10px] border-r-[10px] border-t-[10px] 
               border-l-transparent border-r-transparent border-t-indigo-900"
        
      />

      <div
        className="absolute left-4 -bottom-[7px] w-0 h-0 
               border-l-[8px] border-r-[8px] border-t-[8px] 
               border-l-transparent border-r-transparent border-t-[#3d2fa9]"
      />
      <div className="flex flex-col  bg-[#3d2fa9] shadow-lg rounded-xl p-3 border-4 border-indigo-900 ">
        <p className="text-[0.5rem] sm:text-[0.6rem] text-[#e5e5e5]">
          click the image to go to link!
        </p>
      </div>
    </motion.div>
  );
}

export default HoverLink;
