import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Your Homies | About</title>
      </Helmet>
      <div className="bg-lighten p-10 mt-16 text-center">
        <h2 className=" text-4xl text-primary font-bold">About Us</h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-5  mt-16 md:items-center px-5">
        <div className="content md:w-[40%]">
          <h2 className="text-4xl font-bold text-primary mb-8 divider-start uppercase">
            who we are ?
          </h2>
          <p className="text-xl font-medium text-gray-400">
            We are the only group in the world who make your travel more
            comfortable with our hospitality. We try to give you the best of our
            services. We have all types of rooms, resorts, guest houses etc.
            that make you feel like your own home{" "}
          </p>
        </div>
        <div className="image  md:w-[60%] flex justify-end">
          <img
            src="https://i.postimg.cc/hPYHgTgL/depositphotos-99770258-stock-photo-multiethnic-business-team.webp"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5  mt-16 md:items-center px-5">
        <div className="image md:w-[60%] flex justify-start">
          <img src="https://i.postimg.cc/zXCH52z1/meet-the-team.jpg" alt="" />
        </div>
        <div className="content md;w-[40%]">
          <h2 className="text-4xl font-bold text-primary mb-8 divider-start uppercase">
            Why Choose Us ?
          </h2>
          <ul className="text-xl font-medium text-primary list-disc px-5 pb-5">
            <li>24/7 Active Service</li>
            <li>Best Facilities</li>
            <li>World largest area</li>
            <li>Client Satisfaction</li>
          </ul>
          <p className="text-xl text-primary font-extrabold">Previous Clients Review Are Good and so on !</p>
        </div>
      </div>
    </div>
  );
};

export default About;
