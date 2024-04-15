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
          <div className="relative md:h-[70vh]">
            <img className="w-full" src={banner1} alt="" />
            <div className="absolute bottom-[50%] right-[10%]">
              <h2 className="md:text-5xl font-bold text-primary p-2 rounded-sm bg-lighten">
                The Best Resort Services{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:h-[70vh] relative">
            <img className="w-full" src={banner5} alt="" />
            <div className="absolute bottom-[50%] right-[10%]">
              <h2 className="md:text-5xl font-bold text-primary p-2 rounded-sm bg-lighten">
                Best Netural View{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:h-[70vh] relative">
            <img className="w-full" src={banner3} alt="" />
            <div className="absolute bottom-[50%] right-[10%]">
              <h2 className="md:text-5xl font-bold text-primary p-2 rounded-sm bg-lighten">
                On OF The Best Hotel Services{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:h-[70vh] relative">
            <img className="w-full" src={banner4} alt="" />
            <div className="absolute bottom-[50%] right-[10%]">
              <h2 className="md:text-5xl font-bold text-primary p-2 rounded-sm bg-lighten">
                World Best Room Services{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <Propertys></Propertys>
      </div>
    </div>
  );
};

export default Home;
