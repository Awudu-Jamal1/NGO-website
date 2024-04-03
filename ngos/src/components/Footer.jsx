import logo from "../assets/images/logo 3.png"

function Footer() {
    return ( <>

    <footer id="ct" className=" px-6   lg:px-8 bg-text1 shadow-lg py-8 text-main">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16  border-gray-200   lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <div

              className="flex  text-center  max-w-xl  flex-col items-center justify-between"
            >
              <img style={{height:'8em'}} src={logo} alt="" />
            </div>
            <div

              className="text-center tracking-wide text-white "
            >
              <h1 className="font-bold ">Contact Us</h1>
              <p className="py-4">Email: <span className="cursor-pointer" >globallygreeen@gmail.com</span></p>
              <p>Telephone: <span className="cursor-pointer">0592400229 / 0551698607</span></p>
            </div>
            <div
              className="flex    max-w-xl  flex-col items-center justify-between"
            >
              <h1 className=" font-bold text-white">Follow Us On</h1>

              <div className="py-4  w-48">
                <div className=" grid grid-cols-2 cursor-pointer gap-0 px-9 py-2">
                <div className="icons8-facebook"></div>
                <div className="text-sm font-bold text-white pointer ">Globally Green</div>
                </div>
                <div className="grid grid-cols-2 cursor-pointer gap-1 px-9 py-2">
                <div className="icons8-instagram"></div>
                <div className="text-sm font-bold text-white ">globallygreen_</div>
                </div>
              </div>
            </div>

        </div>
      </footer>
    </> );
}

export default Footer;