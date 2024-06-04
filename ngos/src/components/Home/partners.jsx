import dry from "../../assets/images/dried.png";

export default function Partners() {
  return (
    <div id="do" className="  w relative py-8 px-4 // border border-[#18206f] border-4 ">
      {/* <img className="w-full h-[25em] " src={dry} alt="" /> */}

      <div className="flex justify-center flex-col md:flex-row 
       
      top-0 py-8 px-4 w-full   ">
        <div>
          <div>
            <div className="text-2xl py-4 max-w-[15em] py-4  font-bold">
              We’re a nonprofit in the business of building a better future.
            </div>
          </div>

          <div className="py-5 ">
            <button className=" bg-main3 bg-[#18206f] text-[#fff] py-3 px-3 font-bold text-lg ">
              DONATE
            </button>
          </div>
        </div>
        <div className="px-6 text-normal ">
          <p className="py-2">Clean air.</p>
          <p className="py-2">Clean water.</p>
          <p className="py-2">Wild places.</p>
          <p className="py-2">
            At Globally Green, we think they’re worth fighting for.
          </p>
        </div>
      </div>
    </div>
  );
}
