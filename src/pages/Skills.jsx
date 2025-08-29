import PixelBtn from "../components/PixelBtn";
import BtnSecondary from "../components/BtnSecondary";
import IconCard from "../components/IconCard";
import skillSets from "../data/skillSet.json";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Skills(props) {
  const lang = skillSets.ProgrammingLanguages;
  const tools = skillSets.FrameworksAndTools;
  const other = skillSets.DesignAndCollaboration;
  const [skillSet, setSkillSet] = useState(0);

  return (
    <>
      <div
        className="bg-[#080861] flex flex-col md:flex-row justify-center 
             gap-4 p-6 md:p-10 rounded-[10px] w-full md:max-w-[1000px] 
             h-auto md:w-[60vw] md:h-[80vh] md:max-h-[500px] overflow-x-auto overflow-y-auto no-scrollbar"
      >
        <div className="flex flex-col m-1 w-full align-top">
          {/* nav */}
          <div className="truncate-ellipsis flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="font-black text-[clamp(1.75rem,4vw,2.5rem)] text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
              SKILLS!
            </h1>
            <PixelBtn name="back" dest="/" />
          </div>
          {/* languages and frameworks */}
          <div className="mt-3 gap-2 flex-col align-middle items-center flex sm:flex-row sm:justify-evenly">
            <BtnSecondary
              name="languages"
              onClick={() => setSkillSet(0)}
            ></BtnSecondary>
            <BtnSecondary
              name="frameworks/tools"
              onClick={() => setSkillSet(1)}
            ></BtnSecondary>
            <BtnSecondary
              name="design & collab"
              onClick={() => setSkillSet(2)}
            ></BtnSecondary>
          </div>
          <div className="mt-5 flex flex-row justify-center flex-wrap gap-7 items-center w-full">
            <AnimatePresence mode="wait">
              {(skillSet === 0 ? lang : skillSet === 1 ? tools : other).map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconCard url={skill.img_url} name={skill.name} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
