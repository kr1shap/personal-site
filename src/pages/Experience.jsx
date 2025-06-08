import LargeCard from '../components/LargeCard';
import PicBtn from '../components/PicBtn';
import PixelBtn from '../components/PixelBtn';
import portInfo from '../data/portInfo.json';
import { useState } from "react";
import { motion } from 'framer-motion';

function Experience(props) { 
    //set const to index for card 
    const [selectedIndex, setSelectedIndex] = useState(0);
    //Change the page title, based on whether it is for the experience cards or not 
    const arr = props.isExp ? portInfo.experience : portInfo.projects; //gets correct JSON section 
    const changeCard = (isFwd) => { //function expression to change the index of the card
        const idx = isFwd ? 1 : -1;
        if (selectedIndex + idx >= (arr).length) {
            setSelectedIndex(0);
        } else if (selectedIndex + idx < 0) {
            setSelectedIndex((arr).length - 1);
        } else {
            setSelectedIndex(selectedIndex + idx);
        }
    };

    return (
        <>
            <div className="bg-[#080861] flex flex-col gap-6 p-6 md:p-10 rounded-[10px] w-[90vw] md:w-[78vw] h-auto md:h-[75vh]
                max-w-[1000px] max-h-[550px] overflow-hidden">
                <div className="flex flex-col m-1 w-full overflow-x-hidden">
                    {/* nav */}
                    <div className="flex flex-col sm:flex-row justify-between items-center align-middle">
                        <h1 className="mb-3 font-black text-[clamp(1.75rem,4vw,2.5rem)] text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
                            {props.isExp ? "EXPERIENCE!" : "PROJECTS!"}
                        </h1>
                        <PixelBtn name="back" dest="/" />
                    </div>
                    
                    {/* card change */}
                    <div className="flex flex-row items-center justify-center gap-2 md:gap-6 w-full overflow-hidden">
                        <div className="flex-shrink-0">
                            <PicBtn url="arrowBtn.png" action={() => changeCard(false)} /> 
                                {/* changeCard action to go back  */}
                        </div>

                        <div className="flex-grow flex justify-center overflow-hidden min-w-0">
                            
                            {(arr).map((exp, idx) => {
                                if (idx === selectedIndex) {
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}>
                                        <LargeCard
                                            key={idx}
                                            projName={exp.title}
                                            img={exp.img}
                                            desc={exp.description}
                                            url={exp.url}
                                        />
                                        </motion.div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        <div className="flex-shrink-0">
                            <PicBtn url="arrowBtn.png" action={() => changeCard(true)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
