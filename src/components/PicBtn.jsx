
function PicBtn(props) { 

    return(
            <a href={props.redirect ? props.redirect : null} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                <img className="
                w-20 h-20
                bg-transparent
                rounded-full
                object-cover
                shadow
                transform transition-all duration-300 ease-in-out
                hover:-translate-y-1.5"
                src={props.url ? props.url : "placeholder.jpg"}
                onClick={props.action ? props.action : null}/>
            </a>
    );
}



export default PicBtn