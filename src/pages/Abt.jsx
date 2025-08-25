import PixelBtn from "../components/PixelBtn";
import { motion } from "framer-motion";
function Abt(props) {
  return (
    <div
      className="bg-[#080861] flex flex-col md:flex-row justify-center 
             gap-10 p-6 md:p-10 rounded-[10px] w-full max-w-[1000px] 
             h-auto md:h-[80vh] md:max-h-[700px] overflow-x-auto overflow-y-auto no-scrollbar"
    >
      {/* image */}
      <motion.div
        className="sm:ml-4 flex align-middle items-center justify-center w-full"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8,
        }}
        whileHover={{
          y: [-2, 2, -2],
          transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img
          className="w-[30vw] max-w-[200px] min-w-[100px] h-auto object-contain shadow bg-transparent"
          src="avatar.png"
          alt="avatar"
        />
      </motion.div>

      {/* text contents */}
      <div className="flex flex-col justify-evenly max-w-full text-wrap break-words px-2 md:px-4">
        <div className="flex flex-col m-2 max-w-full">
          <h1 className="font-black text-[clamp(1.5rem,4vw,2.5rem)] text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
            HELLO! I’m Krisha.
          </h1>
          <h3 className="mt-2 font-medium text-[#FFD4E7] text-[clamp(0.9rem,2vw,1.2rem)]">
            CS spec + stats & linguistics minor @ UofT
          </h3>
          <p className="mt-7 text-[clamp(0.7rem,1.4vw,0.8rem)] text-[#e7e5f6] leading-snug">
            Hey there! My name is Krisha and I’m a 2nd year student at UofT,
            studying CS and stats! 
            <br />
            <br />
            I enjoy building responsive, user-friendly web applications using React, JavaScript, and modern front-end technologies, as well as crafting polished iOS apps with Swift. My work emphasizes clean architecture, smooth user experiences, and scalable design.
            <br />
            Let’s connect!
          </p>
        </div>

        {/* buttons */}
        <div className="flex flex-wrap justify-evenly gap-2 mt-4">
          <PixelBtn name="projects" dest="/projects" />
          <PixelBtn name="experience" dest="/experience" />
          <PixelBtn name="skills" dest="/skills" />
          <PixelBtn name="contact" dest="/contact" />
        </div>
      </div>
    </div>
  );
}

export default Abt;
