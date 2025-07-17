import PixelBtn from "../components/PixelBtn";

function NotFound(props) {
  return (
    <>
      <div
        className="bg-[#080861] flex flex-col items-center justify-center 
             md:flex-row gap-6 p-6 md:p-10 rounded-[10px] 
             w-full max-w-[1000px] h-auto md:max-h-[550px]"
      >
        {/* text contents */}
        <div className="flex flex-col justify-center items-center max-w-xl gap-5">
          <h1 className="text-center font-black text-4xl text-[#D9D6F3] transition duration-100 ease-in-out hover:text-[#e7e5f4] hover:-translate-y-0.5">
            404 NOT FOUND!
          </h1>
          {props.back ? <PixelBtn name="Home" dest="/" /> : null}
        </div>
      </div>
    </>
  );
}

export default NotFound;
