import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function BodySection1() {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth > 768) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
  }, [screenWidth]);
  return (
    <div className=" flex flex-col md:grid md:grid-cols-2 gap-28 w-full h-max p-8 md:px-40  md:py-28 items-center ">
      <div className=" text-Black flex flex-col gap-6 md:gap-10 items-start">
        <h1 className=" text-2xl md:text-6xl font-semibold ">
          Specialized Basement Wall Humanity Solutions
        </h1>
        <h5 className=" text-sm md:text-lg  font-medium text-left md:w-3/4">
          Inside Dry offers expert solutions for basement wall humidity issues. See before and after photos, get a free checkup, and book an appointment today.
        </h5>
        <img src="./10.webp" alt="" className={`${displayButton === false?"hidden":"block"} w-[20rem] mx-auto md:mx-0  rounded-3xl shadow-black  shadow-md`} />

        <button onClick={()=>navigate("/contact")} className=" h-12 w-60 md:w-44 md:text-xl font-semibold rounded-3xl mx-auto md:mx-0  bg-white border-2 text-my-blue border-my-blue hover:bg-my-blue hover:text-white">
          Get Your Free Checkup
        </button>

      </div>
        <img src="./10.webp" alt="" className={`${displayButton == true ? "hidden":"block"} w-[30rem]  rounded-3xl shadow-black  shadow-md`} />
    </div>
  )
}
