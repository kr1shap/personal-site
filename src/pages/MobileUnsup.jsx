function MobileUnsup(props) {
     return(
        <>
            <div className="bg-[#080861] flex flex-col align-middle justify-center md:flex-row gap-6 p-10 rounded-[10px] w-[78vw] h-[75vh]
                max-w-[1000px] max-h-[550px] overflow-hidden">

                {/* text contents */}
                <div className="flex flex-col justify-center items-center max-w-xl gap-5">
                    <h1 className="text-center font-black text-xl text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
                        Sorry! I do not support my site on mobile D:</h1>
                </div>
            </div>

        </>
    );
}

export default MobileUnsup;
