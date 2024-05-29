const data =[
    {
        img:"https://static.wixstatic.com/media/b9f1e7d085274c9ba7dc659115e2e214.jpg/v1/fill/w_388,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Green%20Lake.jpg"
       ,Title:"School of (Im) Possible:Empowering Young Women to Fight Climate Change",info:'lorafadflaksfjalksjfklasjdfklasjdfklajskldfjakl' , design:'bg-[green]'
    },{
        img:"https://static.wixstatic.com/media/b9f1e7d085274c9ba7dc659115e2e214.jpg/v1/fill/w_388,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Green%20Lake.jpg"
       ,Title:"School of (Im) Possible:Empowering Young Women to Fight Climate Change",info:'lorafadflaksfjalksjfklasjdfklasjdfklajskldfjakl' , design:'bg-[#8a1c7c]'
    },{
        img:"https://static.wixstatic.com/media/b9f1e7d085274c9ba7dc659115e2e214.jpg/v1/fill/w_388,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Green%20Lake.jpg"
       ,Title:"School of (Im) Possible:Empowering Young Women to Fight Climate Change", info:'lorafadflaksfjalksjfklasjdfklasjdfklajskldfjakl' , design:'bg-[red]'
    },{
        img:"https://static.wixstatic.com/media/b9f1e7d085274c9ba7dc659115e2e214.jpg/v1/fill/w_388,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Green%20Lake.jpg"
       ,Title:"School of (Im) Possible:Empowering Young Women to Fight Climate Change",info:'lorafadflaksfjalksjfklasjdfklasjdfklajskldfjakl' , design:'bg-[blue]'
    }
]

export const WorkContent =()=>{
    return(
        <div className="mx-auto max-w-7xl py-10"  >
            
            <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 text-[#fff]">
                {data.map((x,i)=>(
                    <div className="grid grid-cols-2" key={i}>

                        <div className="" ><img src={x.img} alt="" /></div>
                        <div className={`${x.design} px-5`} >
                        <div className="py-4 ">Town</div>
                            <div className="text-1xl font-bold py-4" > {x.Title}</div>
                            <div className="py-8 "><button className="border py-3 px-6 bg-[#372772]" >Read More</button></div>
                             </div>
                    </div>
                ))}

            </div>
        </div>
    )
}