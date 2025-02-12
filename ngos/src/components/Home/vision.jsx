const Helps =[{topic:"Awareness Creation",info:"Creating awareness empowers action for a sustainable, healthier planet.",buttoms:"Read More",icons:""},
  {topic:"Cleaning Environment",info:"Cleaning the environment reduces pollution and fosters a safer, greener world.",buttoms:"Join Now",icons:""},
  {topic:"Evironmental Education",info:"Environmental education empowers individuals to protect and sustain the planet for future generations.",buttoms:"Know More",icons:""},
  {topic:"Eco Development",info:"Eco development promotes sustainable growth, balancing environmental conservation with economic progress.",buttoms:"Join Now",icons:""},
]

function Vision() {
  return (
    <>
      <section>
       <div className="lg:grid grid-cols-5">
        <div className=" col-span-2 ">
          <div><img src="https://wdtboomi.wpengine.com/wp-content/uploads/2023/01/Help-768x511.webp" className="h-[700px] w-[500px] imageSlizer" alt="" /></div>
          <div><img src="https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/home-image-frame.webp" className="-mt-48 -ml-24" alt="" /></div>
        </div>
        <div className=" col-span-3 text-left px-10 pt-3">
          <h1 className="text-6xl font-medium text-main4">How You <span className="text-[#294145]">Can Help</span></h1>
          <p className=" tracking-wide text-base py-5 max-w-lg ">
          Support Global Green by taking action to reduce your environmental impact and promote sustainability.
          </p>
          <div className="lg:grid grid-cols-2  mt-10 text-center gap-10 text-[#294145]">
            {Helps.map((e,i)=>(
            <div key={i} className=" px-10 my-5  bg-[#86b85e1a] py-12">
              <div></div>
              <h3 className="font-semibold text-xl">{e.topic}</h3>
              <p className="py-5">{e.info}</p>
              <div><button className="border-b-2 border-[#284145] text-lg">{e.buttoms}</button></div>
            </div>))}
          </div>
        </div>
       </div>
      </section>
    </>
  );
}

export default Vision;
