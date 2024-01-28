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
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

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
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              {t("uzb_title")}
            </h2>
            <p className="font-medium text-sm sm:text-base">{t("uzb_desc")}</p>
          </div>
          <img
            src={Uzbekistan}
            alt="Uzbekistan"
            draggable={false}
            className="select-none h-full w-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              {t("dubai_title")}
            </h2>
            <p className="font-medium text-sm sm:text-base mt-2">
              {t("dubai_desc")}
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
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              {t("astana_title")}
            </h2>
            <p className="font-medium text-sm sm:text-base">
              {t("astana_desc")}
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
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              {t("russia_title")}
            </h2>
            <p className="font-medium text-sm sm:text-base">
              {t("russia_desc")}
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
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              {t("bay_title")}
            </h2>
            <p className="font-medium text-sm sm:text-base">{t("bay_desc")}</p>
          </div>
          <img
            src={Mountain}
            alt="Mountain"
            draggable={false}
            className="select-none h-full w-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-[20%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-1/2 p-3">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-agbalumo">
              {t("istanbul_title")}
            </h2>
            <p className="font-medium text-sm sm:text-base mt-2">
              {t("istanbul_desc")}
            </p>
          </div>
          <img
            src={Turkey}
            alt="Turkey"
            draggable={false}
            className="select-none h-full w-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default index;
