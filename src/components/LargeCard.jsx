function LargeCard(props) {
    return (
        <div className="
            w-full max-w-sm
            mx-auto
            h-auto
            bg-[#2E2E92]
            p-5
            rounded-[10px]
            flex flex-col gap-2
            shadow-[2px_2px_black]
            transition-transform duration-300 ease-in-out hover:-translate-y-0.5
            overflow-hidden
        ">
            <div className="w-full h-auto max-h-[150px] rounded-[6px] overflow-hidden">
                <a href={props.url || null} target="_blank">
                    <img
                        href={props.url || null}
                        src={props.img || 'placeholder.jpg'}
                        className="w-full h-full object-cover"
                        alt="an image of my project"
                    />
                </a>
            </div>

            <div className="flex flex-col text-[#F8F8F8] pt-1 flex-grow overflow-hidden">
                <h1 className="text-base font-semibold mb-1 break-words">
                    {props.projName || "[No title]"}
                </h1>
                <div className="text-[0.7rem] font-light break-words whitespace-pre-line overflow-y-auto max-h-[14vh] pr-1">
                    {props.desc || "Lorem ipsum blah blah blah blah blah blah"}
                </div>
            </div>
        </div>
    );
}

export default LargeCard