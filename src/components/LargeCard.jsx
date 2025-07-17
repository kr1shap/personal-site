function LargeCard(props) {
    return (
        <div className="
            w-full max-w-sm
            mx-auto
            h-auto
            bg-[#2E2E92]
            p-8
            rounded-[10px]
            flex flex-col gap-2
            shadow-[2px_2px_black]
            transition-transform duration-300 ease-in-out hover:-translate-y-0.5
            overflow-auto
        ">
            <div className="w-full h-auto max-h-[150px] rounded-[6px] overflow-hidden">
                <a href={props.data.url || null} target="_blank">
                    <img
                        href={props.data.url || null}
                        src={props.data.img || 'placeholder.jpg'}
                        className="w-full h-full object-cover"
                        alt="an image of my project"
                    />
                </a>
            </div>

            <div className="flex flex-col pt-1 flex-grow overflow-hidden">
                <h1 className="text-xs md:text-xl  text-[#dbdbf5] font-semibold mb-2 break-words">
                    {props.data.title || "[No title]"}
                </h1>
                <div className="font-readable text-xl text-white font-light break-words whitespace-pre-line overflow-y-auto max-h-[14vh] pr-1 no-scrollbar">
                    {props.data.description || "Lorem ipsum blah blah blah blah blah blah"}
                </div>
            </div>
        </div>
    );
}

export default LargeCard