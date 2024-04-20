import logo from "../assets/images/logo 3.png"

function Footer() {
    return ( <>

    <footer className=" px-6  flex justify-center lg:px-8  shadow-inner py-10 text-[#fff]">
     
        <div className="grid  lg:grid-cols-2 sm:grid-cols-3 w-[70em]">
         <div className="py-5">
          <h2 className="font-bold text-2xl">Let's Talk</h2>
          <p className="text-[0.8em] w-[20em] py-5">Interested in  Global Green Movement or Want Join Us.Just enter Your details below</p>
          <div className="relative flex w-full max-w-[24rem]">
  <div className="relative  h-10 w-full min-w-[200px]">
    <input type="email"
      className="peer h-full w-full rounded-[7px] border border-[#fff] border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-[#fff] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#fff] placeholder-shown:border-[#fff] focus:border-2 focus:border-[#fff] focus:border-t-transparent focus:outline-0 disabled:border-0"
      placeholder=" " value="11" />
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#fff] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#fff] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#fff] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#fff] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#fff] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#fff] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#fff] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#fff]">
      Email Address
    </label>
  </div>
  <button disabled
    className="!absolute right-1 top-1 select-none rounded border  py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#fff] transition-all hover:shadow-lg hover:shadow-[#fff] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button">
    Invite
  </button>
</div>  
         </div>
         <div className=" w-[20em] px-2 py-10">
          <div className=" w-full grid grid-cols-3 p-2" ><div className=" text-[0.8em] font-bold "  htmlFor="">Email </div><div className="text-[0.8em] col-span-2">globallygreeen@gmail.com</div></div>
          <div className=" w-full grid grid-cols-3 p-2"><div className=" text-[0.8em] font-bold " htmlFor="">Number</div> <div className="text-[0.8em] col-span-2">0592400229 / 0551698607</div></div>
         </div>
         <div className="py-6 text-[0.9em]"> © Copyright 2024 </div>
        </div>
       
      </footer>
    </> );
}

export default Footer;