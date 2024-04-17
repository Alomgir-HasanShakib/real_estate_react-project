import { Navigation } from "swiper/modules";
import "../index.css";
import banner1 from "../assets/banner.webp";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Helmet } from "react-helmet-async";
import Propertys from "../Components/Propertys";
import Testomonial from "../Components/Testomonial";
const Home = () => {
  return (
    <div className="mt-16">
      <Helmet>
        <title>Your Homies | Home</title>
      </Helmet>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        rewind={true}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative h-[70vh]">
            <img className="w-full  h-full" src={banner1} alt="" />
            <div className="absolute bottom-[10%] left-[20%] bg-white p-5 rounded-lg flex flex-col lg:flex-row gap-3">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select Type
                </option>
                <option>Hotel</option>
                <option>Motel</option>
                <option>Resort</option>
                <option>Vacation Rental</option>
                <option>Lodge</option>
                <option>Guesthouse</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  From
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>

              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  To
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Total Room
                </option>
                <option>1</option>
                <option>2</option>
                <option>2-5</option>
                <option>5-8</option>
                <option>8-10</option>
              </select>
              <input
                type="submit"
                value="Book Now"
                className="btn bg-primary text-lighten hover:bg-transparent hover:text-primary hover:border-primary"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[70vh] relative">
            <img className="w-full  h-full" src={banner5} alt="" />
            <div className="absolute bottom-[10%] left-[20%] bg-white p-5 rounded-lg flex flex-col lg:flex-row gap-3">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select Type
                </option>
                <option>Hotel</option>
                <option>Motel</option>
                <option>Resort</option>
                <option>Vacation Rental</option>
                <option>Lodge</option>
                <option>Guesthouse</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  From
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>

              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  To
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Total Room
                </option>
                <option>1</option>
                <option>2</option>
                <option>2-5</option>
                <option>5-8</option>
                <option>8-10</option>
              </select>
              <input
                type="submit"
                value="Book Now"
                className="btn bg-primary text-lighten hover:bg-transparent hover:text-primary hover:border-primary"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[70vh] relative">
            <img className="w-full h-full" src={banner3} alt="" />
            <div className="absolute bottom-[10%] left-[20%] bg-white p-5 rounded-lg flex flex-col lg:flex-row gap-3">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select Type
                </option>
                <option>Hotel</option>
                <option>Motel</option>
                <option>Resort</option>
                <option>Vacation Rental</option>
                <option>Lodge</option>
                <option>Guesthouse</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  From
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>

              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  To
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Total Room
                </option>
                <option>1</option>
                <option>2</option>
                <option>2-5</option>
                <option>5-8</option>
                <option>8-10</option>
              </select>
              <input
                type="submit"
                value="Book Now"
                className="btn bg-primary text-lighten hover:bg-transparent hover:text-primary hover:border-primary"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[70vh] relative">
            <img className="w-full h-full" src={banner4} alt="" />
            <div className="absolute bottom-[10%] left-[20%] bg-white p-5 rounded-lg flex flex-col lg:flex-row gap-3">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select Type
                </option>
                <option>Hotel</option>
                <option>Motel</option>
                <option>Resort</option>
                <option>Vacation Rental</option>
                <option>Lodge</option>
                <option>Guesthouse</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  From
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>

              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  To
                </option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Total Room
                </option>
                <option>1</option>
                <option>2</option>
                <option>2-5</option>
                <option>5-8</option>
                <option>8-10</option>
              </select>
              <input
                type="submit"
                value="Book Now"
                className="btn bg-primary text-lighten hover:bg-transparent hover:text-primary hover:border-primary"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <Propertys></Propertys>
      </div>
      <div className="mt-16">
        <Testomonial></Testomonial>
      </div>
    </div>
  );
};

export default Home;
