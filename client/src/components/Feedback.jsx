import { FaStar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function Feedback() {
  return (
    <div className="py-10 md:py-32 px-5 md:px-40 min-h-90   ">
        <div className="flex flex-col md:grid md:grid-cols-2 rounded-md shadow-xl">
            <img src="./5.webp" alt="" className=" md:rounded-l-md" />
            <div className=" flex flex-col w-full items-center justify-center gap-4 bg-my-blue text-white px-4 md:px-16 pb-10 md:py-0 md:rounded-r-md font-semibold">
                <div className=" inline-flex w-full justify-center gap-3 pt-10 md:pb-4"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <h6 className="pb-4 md:pb-16 text-justify ">Inside Dry did an amazing job fixing the humidity in my basement. I highly recommend their services.</h6>
                <FaUserCircle className=" size-8 md:size-14" />
                <h6 className="text-sm  md:text-base">Satisfied Customer</h6>
            </div>
        </div>
    </div>
  )
}
