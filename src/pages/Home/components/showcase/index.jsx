import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, Keyboard } from "swiper/modules";
import {
  Dubai,
  Kazakhstan,
  Moscow,
  Mountain,
  Turkey,
  Uzbekistan,
} from "../../../../assets";

const index = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        lazy={"true"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        className="h-screen xs:h-[60vh] md:h-screen"
      >
        <SwiperSlide className="relative">
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              Dubai Skyline
            </h2>
            <p className="font-medium text-sm sm:text-base mt-2">
              The Burj Khalifa, the world’s tallest building, dominates the
              stunning view of Dubai’s urban and natural landscape.
            </p>
          </div>
          <img
            src={Dubai}
            alt="Dubai"
            draggable={false}
            className="select-none h-full w-screen object-cover object-top"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              Golden Mosque
            </h2>
            <p className="font-medium text-sm sm:text-base">
              All images Nur-Astana Mosque Mosque in Kazakhstan The Nur-Astana
              Mosque, is a mosque in Astana, Kazakhstan. It is third largest
              mosque in Central Asia.
            </p>
          </div>
          <img
            src={Kazakhstan}
            alt="Kazakhstan"
            draggable={false}
            className="select-none h-full w-screen object-cover object-top"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              Red square
            </h2>
            <p className="font-medium text-sm sm:text-base">
              Red Square is one of the oldest and largest squares in Moscow, the
              capital of Russia. It is located in Moscow's historic centre, in
              the eastern walls of the Kremlin.
            </p>
          </div>
          <img
            src={Moscow}
            alt="Moscow"
            draggable={false}
            className="select-none h-full w-screen object-cover xs:object-fill"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              Serene Bay View
            </h2>
            <p className="font-medium text-sm sm:text-base">
              A tranquil scene at a bay surrounded by towering green mountains,
              with boats gently floating on the calm waters
            </p>
          </div>
          <img
            src={Mountain}
            alt="Mountain"
            draggable={false}
            className="select-none h-full w-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              Istanbul Skyline
            </h2>
            <p className="font-medium text-sm sm:text-base mt-2">
              A stunning view of Istanbul’s skyline, featuring the iconic Hagia
              Sophia mosque and its four minarets, contrasted by the modern
              buildings and the colorful sky.
            </p>
          </div>
          <img
            src={Turkey}
            alt="Turkey"
            draggable={false}
            className="select-none h-full w-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              Travel Uzbeksitan
            </h2>
            <p className="font-medium text-sm sm:text-base">
              Travel across Uzbekistan. Visit the most popular, modern and, at
              the same time historic places with us.
            </p>
          </div>
          <img
            src={Uzbekistan}
            alt="Uzbekistan"
            draggable={false}
            className="select-none h-full w-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default index;
