import SmallCard from "../components/SmallCard";
import Modal from "../components/Modal";
import PixelBtn from "../components/PixelBtn";
import portInfo from "../data/portInfo.json";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

function Experience(props) {
  //set const to index for card
  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  //Change the page title, based on whether it is for the experience cards or not
  const arr = props.isExp ? portInfo.experience : portInfo.projects; //gets correct JSON section


  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const randomNums = useMemo(
    () => arr.map(() => randomNum(1, 4)),
    [arr]
  );
  
  const handleCardClick = (itemData) => {
    setSelectedData(itemData);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedData(null);
  };

  return (
    <>
      <div
        className="bg-[#080861] flex flex-col md:flex-row justify-center 
             gap-10 p-6 md:p-10 rounded-[10px] w-full max-w-[1000px] 
             h-auto md:h-[80vh] md:max-h-[700px] overflow-x-auto overflow-y-auto no-scrollbar"
      >
        <div className="flex flex-col m-1 w-full align-top">
          {/* nav */}
          <div className="truncate-ellipsis flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="font-black text-[clamp(1.75rem,4vw,2.5rem)] text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
              {props.isExp ? "EXPERIENCE!" : "PROJECTS!"}
            </h1>
            <PixelBtn name="back" dest="/" />
          </div>
          <p className="text-white text-sm extraSmall:text-md text-center p-4">Click the image in the card to view!</p>
          {/* card change */}
          <div className="overflow-y-auto w-full no-scrollbar">
            <div className="extraSmall:flex-row flex-col grid md:grid-cols-2 grid-cols-1 gap-10">
              {arr.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <SmallCard
                    key={idx}
                    projName={exp.title}
                    img={`/cardImages/btn${randomNums[idx]}.png`}
                    action={() => handleCardClick(exp)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showPopup && selectedData && (
        <Modal data={selectedData} onClose={handleClosePopup} isExp={props.isExp}/>
      )}
    </>
  );
}

export default Experience;
