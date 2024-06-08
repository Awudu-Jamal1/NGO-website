import lead from "../../assets/images/lead.jpg"

export const Founder =()=>{
    return(
        <div>

            <div className="grid grid-cols-1 pt-16 lg:grid-cols-2  gap-8 py-4 ">
                <div className="border">
<img src={lead} className="w-full"  alt="" />
                </div>
                <div className="px-2 py-5">
                    <div>
                        <h1 className="text-5xl font-bold py-1 ">Founder’s Message</h1>
                    </div>
                    
<p className="text-normal py-2 leading-8 tracking-wide text-[#000]">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aspernatur dignissimos odio? Quis perferendis eligendi aliquam! Provident ex vel numquam sequi, facere explicabo similique iure? Soluta culpa tempore minus quidem?
</p>


<div>
    <h2 className="text-2xl text-2main italics font-semi-bold p-2">Saudat Kamarre-Deen, Green Africa Youth Organization</h2>
</div>

                </div>
            </div>
        </div>
    )
}