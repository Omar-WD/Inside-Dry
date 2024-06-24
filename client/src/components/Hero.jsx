import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className=" bg-my-blue flex flex-col-reverse md:grid md:grid-cols-2 gap-28 w-full h-max px-8 md:px-40 py-10 md:py-28 items-center ">
      <div className=" text-white flex flex-col gap-10 items-start">
        <h1 className="text-2xl md:text-6xl font-semibold ">
          Professional Basement Wall Humanity Solutions
        </h1>
        <h5 className=" text-left w-full md:w-3/4">
          Specialized in treating basement wall humidity issues. Free checkup
          available.
        </h5>
        <button onClick={()=>navigate("/contact")} className=" h-12 w-72 md:w-44 text-xl font-semibold rounded-3xl  bg-my-lightBlue border-2 hover:bg-black">
          Contact Us
        </button>
      </div>
      <div className="grid grid-cols-2 md:w-[30rem] ">
        <img src="./1.webp" alt="" className="  rounded-tr-[5rem]" />
        <img src="./3.webp" alt="" className="  rounded-br-[5rem]" />
        <img src="./2.webp" alt="" className="  rounded-tl-[5rem]"/>
        <img src="./4.webp" alt="" className="  rounded-bl-[5rem]"/>
      </div>
    </div>
  );
}
