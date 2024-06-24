export default function Sub_Services() {
  return (
    <div className=" flex flex-col justify-between gap-10 w-full bg-my-blue px-8 md:px-40 py-20">
      <div className="flex flex-col justify-center gap-5 items-start md:items-center text-white ">
        <h1 className=" text-3xl md:text-6xl font-semibold">
          Professional Basement Humidity
        </h1>
        <p className=" text-left">
          Specialized in treating basement wall humidity issues. Free checkup
          and consultation available.
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-4 md:h-[450px] md:w-10/12 mx-auto  ">
        <div className="bg-white rounded-t-xl h-full shadow-lg shadow-black">
          <div className="bg-sub1 h-80 md:h-4/6 w-full bg-cover bg-no-repeat bg-center  rounded-t-xl">
            {" "}
          </div>
          <div className="h-auto md:h-4/12 flex flex-col items-center justify-between md:h-[120px] py-3 px-6">
            <h3>Testing Humidity</h3>
            <p className=" text-left">
              We use the latest technology to test the humidity levels in your
              basement.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-t-xl h-full shadow-lg shadow-black">
          <div className="bg-sub2 h-80 md:h-4/6 w-full bg-cover bg-no-repeat bg-center  rounded-t-xl"></div>
          <div className="md:h-4/12 flex flex-col items-center justify-between md:h-[120px] py-3 px-6">
            <h3>Removing Affected Layers</h3>
            <p className=" text-left">
              We take out the affected layers of your basement walls to prevent
              the spread of humidity.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-t-xl h-full shadow-lg shadow-black">
          <div className="bg-sub3 h-80 md:h-4/6 w-full bg-cover bg-no-repeat bg-center  rounded-t-xl"></div>
          <div className="md:h-4/12 flex flex-col items-center justify-between md:h-[120px] py-3 px-6">
            <h3>Applying Waterproofing</h3>
            <p className=" text-left">
              We apply a waterproofing solution to your basement walls to
              prevent humidity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
