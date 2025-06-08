
function PicBtn(props) { 

    return(
            <a href={props.redirect ? props.redirect : null} target="_blank" rel="noopener noreferrer">
                <img className="
                w-20 h-20
                bg-transparent
                rounded-full
                shadow
                transition-shadow duration-300 ease-linear
                hover:-translate-y-1.5"
                src={props.url ? props.url : "placeholder.jpg"}
                onClick={props.action ? props.action : null}/>
            </a>
    );
}



export default PicBtn