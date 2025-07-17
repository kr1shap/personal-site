function SmallCard(props) {
    return (
        <div className="max-w-xs w-full mx-auto
            h-auto
            bg-[#2E2E92]
            p-5
            rounded-[10px]
            flex flex-row gap-5
            overflow-auto
            justify-between
            align-middle
            items-center
        ">
         <p className="line-clamp-3 truncate-ellipsis 
         text-[0.65rem] md:text-[0.7rem] font-semibold 
         mb-1 break-words text-[#dbdbf5]">{props.projName ? props.projName : "Title"}</p>

           <img className="
                w-20 h-20
                bg-transparent
                object-cover
                transform transition-all duration-300 ease-in-out
                hover:-translate-y-1.5"
                src={props.img ? props.img : "placeholder.jpg"}
                onClick={props.action ? props.action : null}/>
        </div>
    );
}

export default SmallCard