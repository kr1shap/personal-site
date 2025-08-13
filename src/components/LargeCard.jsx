function LargeCard(props) {
  return (
    <div
      className="
            w-full max-w-[80vw]
            mx-auto
            h-auto
            bg-gradient-to-br from-[#382f89] to-[#4a3ac2]
            p-5
            mt-4
            md:max-w-[500px]
            rounded-[20px]
            flex flex-col gap-2
            shadow-2xl
            border-indigo-900 
            border-6 
            transition-transform duration-300 ease-in-out hover:-translate-y-0.5
            overflow-auto
        "
    >
      <div className="w-full h-auto max-h-[150px] rounded-[6px] overflow-hidden">
        <a href={props.data.url || null} target="_blank">
          <img
            href={props.data.url || null}
            src={props.data.img || "placeholder.jpg"}
            className="w-full h-full object-cover"
            alt="an image of my project"
          />
        </a>
      </div>

      <div className="flex flex-col pt-1 flex-grow overflow-auto">
        <h1 className="font-readable text-xs md:text-[1rem]  text-[#dbdbf5] font-bold mb-2 break-words">
          {props.data.title || "[No title]"}
        </h1>
        {props.data.stack && (
          <h1 className="font-readable text-xs md:text-[0.7rem] text-[#b9b9f4] font-black mb-2 break-words">
            {props.data.stack}
          </h1>
        )}
        <div className="font-readable text-[0.8rem] text-white font-medium break-words whitespace-pre-line overflow-y-auto max-h-[14vh] pr-1 no-scrollbar">
          {props.data.description ||
            "Lorem ipsum blah blah blah blah blah blah"}
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
