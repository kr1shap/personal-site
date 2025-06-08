import { Link } from 'react-router-dom';

/*
props { 
    props.dest - router
    props.name - name btn

}

*/
function PixelBtn(props) { 

    return (
        <Link to={props.dest ? props.dest : "/"} viewTransition>
            <button className="font-medium rounded-[25px]
                border-indigo-900 
                    border-4 bg-[#F2F1FF]
                    text-[#2E2A4F] 
                    text-xs
                    py-2 px-4
                    transform transition duration-300 ease-in-out hover:bg-[#D9D6F3] hover:translate-y-0.5
                    cursor-pointer"
            >
                {props.name ? props.name : "placeholder.jpg"}
            </button>
        </Link>
    );
}

export default PixelBtn
