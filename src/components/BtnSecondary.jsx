/*
props { 
    props.dest - router
    props.name - name btn

}

*/
function BtnSecondary(props) {
  return (
    <button
      onClick={props.onClick ?? null}
      className="font-medium rounded-[25px]
        border-[#ffffffaa] 
                border-2 bg-indigo-900
                text-[#e5e5e5] 
                text-[0.6rem]
                py-2
                px-2
                sm:text-[0.7rem]
                sm:py-2 sm:px-4
                transform transition duration-300 ease-in-out hover:bg-[#0b0357b3] hover:translate-y-0.5
                cursor-pointer"
    >
      {props.name ? props.name : "N/A"}
    </button>
  );
}

export default BtnSecondary;
