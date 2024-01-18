import logo from "../assets/images/logo 2.png"

function Footer() {
    return ( <>

    <footer className="mx-auto max-w-7xl px-6 lg:px-8 bg-text1 shadow-lg py-8 text-main">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16  border-gray-200   lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <div

              className="flex  text-center  max-w-xl  flex-col items-center justify-between"
            >
              <img style={{height:'5em'}} src={logo} alt="" />
            </div>
            <div

              className="flex  text-center  max-w-xl  flex-col items-center justify-between"
            >
              <h1 className="text-2xl font-bold ">LOGO NAME</h1>
            </div>
            <div

              className="flex  text-center  max-w-xl  flex-col items-center justify-between"
            >
              <h1 className=" font-bold ">Follow Us On</h1>
              <div>

              </div>
            </div>

        </div>
      </footer>
    </> );
}

export default Footer;