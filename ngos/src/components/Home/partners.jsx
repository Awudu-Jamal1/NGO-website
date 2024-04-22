import dry from "../../assets/images/dried.png"

export default function Partners() {
    return (
      <div id="do" className="  w relative  ">
        
          <img className="w-full h-[25em] " src={dry} alt="" />
        
        <div className="absolute flex justify-center text-center items-center top-0 donate h-[25em] w-full   ">
          <div>
          <div className="text-4xl  text-[#fff] font-bold">
          Help us Make The Change
        </div>
        <div className="py-5">
          <button className=" bg-[#cc2936] hover:bg-[#dd4b1a] text-[#fff] py-3 px-8 font-bold text-lg ">DONATE NOW</button>
        </div>
          </div>
       
        </div>
       
      </div>
    )
  }