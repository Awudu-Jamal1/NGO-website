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
 At Globally Green, we are a community of individuals who are committed to creating a positive change in our world starting from the grassroot level to the world. Since our founding in 2020, we've been dedicated to educating the  public about the climate crisis and advocating for climate action.Our passionate team and volunteers work tirelessly to ensure that every individual is inspired to take action and an impact is made in every community we find ourselves in.
We appreciate everyone who is on this journey with us. We're excited to have you with us and look forward to achieving great things together.
</p>


<div>
    <h2 className="text-2xl text-2main italics font-semi-bold p-2">Saudat Kamarre-Deen, Globally Green</h2>
</div>

                </div>
            </div>
        </div>
    )
}