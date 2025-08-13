import PixelBtn from "../components/PixelBtn";
import IconCard from "../components/IconCard";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

function Skills(props) {

  return (
    <>
      <div
        className="bg-[#080861] flex flex-col md:flex-row justify-center 
             gap-4 p-6 md:p-10 rounded-[10px] w-full max-w-[1000px] 
             h-auto md:h-[80vh] md:max-h-[500px] overflow-x-auto overflow-y-auto no-scrollbar"
      >
        <div className="flex flex-col m-1w-full align-top">
          {/* nav */}
          <div className="truncate-ellipsis flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="font-black text-[clamp(1.75rem,4vw,2.5rem)] text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
              SKILLS!
            </h1>
            <PixelBtn name="back" dest="/" />
          </div>
        {/* languages and frameworks */}
        <div className="mt-5 flex flex-col gap-2 items-center w-full">
            <div className="flex flex-col verySmall:flex-row w-full justify-center items-center gap-3">
                <IconCard url="/skillImages/CS.png" name="C"/>
                <IconCard url="/skillImages/javaS.png" name="Java"/>
                <IconCard url="/skillImages/pythonS.png" name="Python"/>
                <IconCard url="/skillImages/swiftS.png" name="Swift"/>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-3">
                <IconCard url="/skillImages/reactS.webp" name="React"/>
                <IconCard url="/skillImages/flaskS.png" name="Flask"/>
            </div>
        </div>
        {/* external, design */}
        <div className="mt-10 text-xs font-light text-white transition duration-300 ease-in-out hover:text-[#887bda]">
        <p className="mt-1">Other Languages: HTML, CSS, Type/JavaScript, Bash Scripting</p>
        <p className="mt-1">Libraries: Numpy, TailwindCSS, Bootstrap, Framer Motion</p>
        <p className="mt-1">Design/UI: Canva, Figma</p>
        </div>
        </div>
      </div> 
    </>
  );
}

export default Skills;
