
function IconCard(props) { 

    return (
        <div className="inline-flex flex-col items-center justify-center w-fit h-fit gap-2">
            <img
                className="
                    w-full h-full
                    max-w-20 max-h-20
                    bg-transparent
                    object-cover
                    shadow
                    transform transition-all duration-300 ease-in-out
                    hover:-translate-y-1.5"
                src={props.url ? props.url : "placeholder.jpg"}
                onClick={props.action ? props.action : null}
                style={{ width: props.size || 80, height: props.size || 80 }}
            />
            <p className="text-[0.7rem] text-white font-light text-center">{props.name}</p>
        </div>
    );
}

export default IconCard; 
