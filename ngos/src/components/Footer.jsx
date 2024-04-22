import logo from "../assets/images/logo 3.png";

function Footer() {
  return (
    <>
      <footer id="ct" className=" px-6  flex justify-center lg:px-8  shadow-inner py-10 text-[#fff]">
        <div className="grid  place-items-center   lg:grid-cols-2 sm:grid-cols-3 w-[70em]">
          <div className="py-5">
            <h2 className="font-bold text-2xl">Let's Talk</h2>
            <p className="text-[0.9em] w-[20em] py-5">
              Interested in Global Green Movement or Want Join Us.Just enter
              Your details below
            </p>
            <div className="relative flex w-full max-w-[24rem]">
              <div className="relative  h-10 w-full min-w-[200px]">
                <input
                  type="email"
                  className="peer h-full w-full rounded-[7px] border border-[#fff] border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-[#fff] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#fff] placeholder-shown:border-[#fff] focus:border-2 focus:border-[#fff] focus:border-t-transparent focus:outline-0 disabled:border-0"
                  placeholder=" "
                  value="11"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#fff] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#fff] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#fff] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#fff] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#fff] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#fff] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#fff] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#fff]">
                  Email Address
                </label>
              </div>
              <button
                disabled
                className="!absolute right-1 top-1 select-none rounded border  py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#fff] transition-all hover:shadow-lg hover:shadow-[#fff] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
          <div className=" w-[20em] px-2 py-10">
            <div className=" w-full grid grid-cols-3 p-2">
              <div className=" text-[0.9em] font-bold " htmlFor="">
                Email{" "}
              </div>
              <div className="text-[0.9em] text-main col-span-2">
                globallygreeen@gmail.com
              </div>
            </div>
            <div className=" w-full grid grid-cols-3 p-2">
              <div className=" text-[0.9em] font-bold " htmlFor="">
                Number
              </div>{" "}
              <div className="text-[0.9em] text-main col-span-2">
                0592400229 / 0551698607
              </div>
            </div>

            <div className="flex justify-center py-5">
              <div className="px-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="text-[#fff] "
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                </svg>
              </div>

              <div className="px-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="text-[#fff] "
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </div>

              <div className="px-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="text-[#fff] "
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                </svg>
              </div>
              <div></div>
            </div>
          </div>
          <div className="py-6 text-[0.9em]"> © Copyright 2024 </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
