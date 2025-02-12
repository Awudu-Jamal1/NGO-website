const impacts =[{
    icon:"https://ecozone-wp.laralink.com/wp-content/uploads/2024/10/feature_icon_1-2.svg",
    title:"Environmental Education",info:"We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices."
},
{
    icon:"https://ecozone-wp.laralink.com/wp-content/uploads/2024/10/feature_icon_2-2.svg",
    title:"Environmental Education",info:"We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices."
},
{
    icon:"https://ecozone-wp.laralink.com/wp-content/uploads/2024/10/feature_icon_3-2.svg",
    title:"Environmental Education",info:"We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices."
},
{
    icon:"https://ecozone-wp.laralink.com/wp-content/uploads/2024/10/feature_icon_4-1.svg",
    title:"Environmental Education",info:"We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices."
},]

function OurImpact() {
    return ( <div>
<div className="max-w-7xl m-auto text-center py-24">
    <div>
    <h6 className="text-lg font-medium text-main4 tracking-wide leading-relaxed py-2">What We Do</h6>
                <h1 className="text-4xl font-bold leading-tight py-2" style={{  fontFamily: "Encode Sans Condensed, serif" }}>
                Our Initiatives and Impact
                </h1>
    </div>
    <div className="lg:grid grid-cols-4 gap-5 py-28 ">
        {impacts.map((e,i)=>(
            <div key={i} className=" shadow-xl max-w-xl px-6 py-6 place-content-center m-auto">
                <div className=" flex place-content-center">
                <div className="bg-main4 -mt-16    w-fit px-8 py-8 rounded-full">
                <img src={e.icon} alt="" />
                </div>
                </div>
                
                <div className="py-5">
                <h1 className="text-2xl font-bold leading-tight py-2">{e.title}</h1>
                <p className="text-base leading-loose text-[#555555] py-3">
                    {e.info}
                </p>
                </div>
                
            </div>
        ))}
    </div>

</div>

    </div> );
}

export default OurImpact;