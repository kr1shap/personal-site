import PixelBtn from '../components/PixelBtn';

function Abt(props) {
    return (
        <>
            <div className="bg-[#080861] flex flex-col items-center justify-center md:flex-row gap-6 p-6 md:p-10 rounded-[10px] w-[90vw] h-auto md:h-[75vh]
                max-w-[1000px] max-h-[550px] overflow-auto">
                
                {/* image */}
                <div className="flex-shrink-0 flex items-center justify-center">
                    <img
                        className="w-[40vw] max-w-[250px] min-w-[120px] h-auto shadow bg-transparent object-contain"
                        src="avatar.png"
                        alt="avatar"
                    />
                </div>

                {/* text contents */}
                <div className="flex flex-col justify-evenly max-w-full text-wrap break-words px-2 md:px-4">
                    <div className="flex flex-col m-2 max-w-full">
                        <h1 className="font-black text-[clamp(1.5rem,4vw,2.5rem)] text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
                            HELLO! I’m Krisha.
                        </h1>
                        <h3 className="mt-2 font-medium text-[#FFD4E7] text-[clamp(0.9rem,2vw,1.2rem)]">
                            CS spec + stats & linguistics minor @ UofT
                        </h3>
                        <p className="mt-7 text-[clamp(0.75rem,1.6vw,1rem)] font-extralight text-[#e7e5f6] leading-snug">
                            Hey there! My name is Krisha and I’m a 2nd year student at UofT, studying CS and stats! [psst: linguistics too!] 
                            <br /><br />
                            I’m constantly learning and growing as I go, and hope to build some really cool projects ꩜ .ᐟ
                            <br />
                            Let’s connect!
                        </p>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-wrap justify-evenly gap-2 mt-4">
                        <PixelBtn name="projects" dest="/projects" />
                        <PixelBtn name="experience" dest="/experience" />
                        <PixelBtn name="contact" dest="/contact" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Abt;
