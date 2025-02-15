import lead from "../../assets/images/lead.jpg";

export const Founder = () => {
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-2   gap-4 max-w-7xl m-auto  ">
        <div className=" relative place-items-center">
          <img src={lead} className="w-3/4 h-3/4" alt="" />
        </div>
        <div className="px-8 py-10 ">
        <div className="   leading-relaxed">
            <h1 className="text-4xl  font-bold leading-tight py-2" style={{  fontFamily: "Encode Sans Condensed, serif" }}>
            Founder's Message
            </h1>
          </div>

          <p className="text-base leading-loose tracking-wide text-[#555555] py-3">
            At Globally Green, we are a community of individuals who are
            committed to creating a positive change in our world starting from
            the grassroot level to the world. Since our founding in 2020, we've
            been dedicated to educating the public about the climate crisis and
            advocating for climate action.Our passionate team and volunteers
            work tirelessly to ensure that every individual is inspired to take
            action and an impact is made in every community we find ourselves
            in. We appreciate everyone who is on this journey with us. We're
            excited to have you with us and look forward to achieving great
            things together.
          </p>

          <div>
            <h2 className="text-2xl text-main4 italics font-semi-bold p-2">
              Saudat Kamarre-Deen, Globally Green
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
