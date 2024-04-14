import { Navigation } from "swiper/modules";
import "../index.css";
import banner from "../assets/banner.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
  <div>
    <Helmet><title>Home</title></Helmet>
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
        <div
          className=" text-3xl tect-center min-h-[50vh] bg-img
        "
        >
          <img className="w-full" src={banner} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
  </div>
  );
};

export default Home;
