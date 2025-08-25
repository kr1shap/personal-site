function IconCard(props) {
  return (
    <div
      className="inline-flex flex-col items-center justify-center gap-2 bg-[#0e0e79] p-4 shadow-2xl
        transform transition-all duration-300 ease-in-out
                    hover:-translate-y-1.5"
    >
      <img
        className="
                    w-[50px] h-[50px]
                    sm:w-full sm:h-full
                    max-w-20 max-h-20
                    min-w-10 min-h-10
                    bg-transparent
                    object-cover
                    shadow
                    "
        src={props.url ? props.url : "placeholder.jpg"}
        onClick={props.action ? props.action : null}
        style={{ width: props.size || 80, height: props.size || 80 }}
      />
      <p className="text-[0.5rem] text-white font-light text-center">
        {props.name}
      </p>
    </div>
  );
}

export default IconCard;
