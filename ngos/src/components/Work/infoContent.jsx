import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const activity = [
    {
      img: "https://wdtboomi.wpengine.com/wp-content/uploads/2022/08/donation-detail-7.webp",
      topic: "Water Body Cleaning",
     },
    {
      img: "https://wdtboomi.wpengine.com/wp-content/uploads/2022/08/donation-detail-6.webp",
      topic: "Plastic Recycle",
      },
    {
      img: "https://wdtboomi.wpengine.com/wp-content/uploads/2022/09/donation-detail-3.webp",
      topic: "Forest Cleaning",
      },
    // {
    //   img: "https://wdtboomi.wpengine.com/wp-content/uploads/2022/12/donation-detail-4.webp",
    //   topic: "Street Cleaning",
    //   info: "Street cleaning helps remove litter, reduce pollution, and maintain urban cleanliness, improving public health and environmental quality.",
    // },
    // {
    //   img: "https://wdtboomi.wpengine.com/wp-content/uploads/2023/02/donation-detail-1.webp",
    //   topic: "Land Pollution",
    //   info: "Land pollution occurs when waste, chemicals, and debris contaminate the soil, harming ecosystems, wildlife, and human health.",
    // },
    // {
    //   img: "https://wdtboomi.wpengine.com/wp-content/uploads/2022/09/donation-detail-8.webp",
    //   topic: "Green Solar Energy",
    //   info: "Green solar energy harnesses sunlight to generate clean, renewable electricity, reducing carbon emissions and promoting sustainable energy solutions.",
    // },
  ];
  
  function VolunteerContent() {
    const [data, setData] = useState(null);

    const handleClick = async () => {
      try {
        const response = await fetch('/data/date.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


      const navigate = useNavigate()
    return (
      <>
        <div>
          <div className=" py-20 pt-28">
          <div className="text-center">
    <h6 className="text-lg font-medium text-main4 tracking-wide leading-relaxed py-2">Project</h6>
                <h1 className="text-4xl font-bold leading-tight py-2" style={{  fontFamily: "Encode Sans Condensed, serif" }}>
               What We Do At Globally Green
                </h1>
    </div>
            <div className="lg:grid grid-cols-3 max-w-7xl m-auto py-16 gap-5 ">
              {activity.map((e, i) => (
                <div 
                key={i} 
                className="bg-white shadow-xl" 
                onClick={() => {
                  // Navigate to a details page based on the topic name
                  navigate(`/details/${encodeURIComponent(e.topic)}`);
                }}
              >
                <div>
                  <img src={e.img} alt="" />
                </div>
                <div className="py-8 px-5 hover:bg-main4 hover:text-white">
                  <h3 className="text-2xl font-semibold group-hover:text-white">{e.topic}</h3>
                  <p className="text-lg tracking-wide py-3">{e.info}</p>
                </div>
              </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
  
  export default VolunteerContent;
  