export const JoinUs =()=>{
    return(
        <div className="flex bg-[#e5e9ed] py-8 place-content-center ">
            <div className=" py-3 px-10">
                <h2 className="text-2xl py-3 px-2">Join Us</h2>
                <div className="flex py-3">
                    <div className="px-2"><input className="px-3 py-3 border"  type="text" placeholder="Enter Email"/></div>
                    <div><button className="px-3 py-3 bg-[#18206f] text-[#fff] border">Submit</button></div>
                </div>
                <p className="max-w-[30em] px-2 py-3 ">
                When you sign up, you’ll become a member of <span className="text-main3">Globally Green </span>  Network. We will keep you informed with the latest alerts and progress reports.
                </p>
            </div>
        </div>
    )
}