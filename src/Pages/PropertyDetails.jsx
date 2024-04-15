import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaLink } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const propertys = data.find((property) => property.id === parseInt(id));
  const {
    rooms_available,
    image,
    contact,
    price_range,
    rating,
    amenities,
    location,
    name,
    type,
  } = propertys;
  return (
    <div>
      <Helmet>
        <title>Your Homies | Property Details</title>
      </Helmet>
      <div className="banner bg-lighten mt-16 py-10 lg:py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-medium text-primary m-3">
          Property Details of <br />{" "}
          <span className="font-bold border-b-2 border-[#003C43]">{name}</span>
        </h2>
      </div>
      <div className="shadow-lg mt-16 flex lg:items-center flex-col-reverse lg:flex-row gap-4 m-3 p-4">
        <div className=" space-y-3 md:p-10 lg:w-[50%]">
          <h2 className="text-2xl md:text-4xl text-primary font-bold ">
            {name}
          </h2>
          <p className=" text-[18px] md:text-xl font-semibold text-primary">
            {location}
          </p>
          <p className=" text-[18px] md:text-xl font-semibold text-primary">
            Available Rooms : {rooms_available}
          </p>
          <p className="text-xl font-semibold text-primary">
            Price Range for One Night : {price_range}
          </p>
          <p className=" text-[18px] md:text-xl font-semibold text-orange-600">
            {" "}
            Rating : {rating}
          </p>
          <p className=" text-[18px] md:text-xl font-semibold text-primary">
            Type : {type}
          </p>
          <p className="text-[18px] md:text-xl font-semibol divider ">Facilities</p>
          <ul className="px-4">
            {amenities.map((amenitie, idx) => (
              <li className="list-disc text-[18px] md:text-xl font-semibol text-green-600" key={idx}>{amenitie}</li>
            ))}
          </ul>
          <div className="space-y-3">
            <h2 className="divider text-xl font-medium text-lime-900">
              Contact Info
            </h2>
            <p className="text-sm md:text-[18px] font-semibold text-gray-600 flex items-center gap-2">
              <MdOutlineEmail className="text-sm md:text-xl"></MdOutlineEmail>{" "}
              {contact.email}
            </p>
            <p className="text-sm md:text-[18px] font-semibold text-gray-600 flex items-center gap-2">
              <FaPhone className="text-sm md:text-xl"></FaPhone> {contact.phone}
            </p>
            <p className="text-sm md:text-[18px] font-semibold text-gray-600 flex items-center gap-2 pb-4">
              <FaLink className="text-sm md:text-xl" text-sm></FaLink>{" "}
              {contact.website}
            </p>
            <button className="btn bg-primary text-lighten font-medium text-xl hover:border-primary hover:text-primary hover:bg-transparent w-full ">
              Book Now
            </button>
          </div>
        </div>
        <div className="right w-full lg:w-[50%] flex-col-reverse lg:items-center">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
