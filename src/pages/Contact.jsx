import PicBtn from "../components/PicBtn";
import PixelBtn from "../components/PixelBtn";
import { motion } from "framer-motion";

function Contact(props) {
  return (
    <div className="bg-[#080861] flex flex-col justify-start gap-10 p-6 md:p-10 rounded-[10px] w-full max-w-[1000px] h-auto md:h-[80vh] md:max-h-[700px] overflow-x-auto overflow-y-auto no-scrollbar">
      {/* Header always at the top */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-black text-3xl small:text-5xl text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
          CONTACT!
        </h1>
        <PixelBtn name="back" dest="/" />
      </div>

      {/* Content vertically centered */}
      <div className="flex flex-1 flex-col md:flex-row justify-center items-center gap-10 w-full">
        {/* img */}
          <motion.div
            className="flex justify-center items-center shrink-0"
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
              className="object-contain w-[50vw] max-w-[400px] max-h-[400px]"
              src="resIcon.png"
              alt="just a cute picture"
            />
          </motion.div>

        {/* buttons */}
        <div className="flex flex-col items-center gap-10 w-full max-w-[500px] overflow-hidden">
          <div className="flex flex-row justify-center gap-x-4 max-w-[200px] mx-auto">
            <PicBtn url="git.png" redirect="https://github.com/kr1shap" />
            <PicBtn url="in.png" redirect="www.linkedin.com/in/kriishap" />
          </div>

          <div className="flex flex-row justify-center gap-4">
            <PixelBtn
              name="resume"
              dest="https://docs.google.com/document/d/1fi3jLCpcrYJ32CJ4kyukxn5jxdXldtsf8XgdYkPDuNI/edit?usp=sharing"
            />
          </div>

          <p className="font-black text-[clamp(0.85rem,1.2vw,1.1rem)] text-[#e7e5f4] text-center break-all">
            email: krisha9845@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
