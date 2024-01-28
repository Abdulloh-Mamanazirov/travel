import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Kazakhstan, Turkey } from "../../../../assets";
import { HotelCard } from "../../../../components";
import { IMAGE_URL } from "../../../../constants";

const index = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let res = await axios("/hotels");
      setData(res?.data);
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="my-16 px-3">
        <h1 className="text-2xl md:text-4xl text-center font-bold font-serif">
          {t("hotels_title")}
        </h1>
        <section className="grid md:grid-cols-2 gap-10 my-10 pb-10 border-b">
          {data?.slice?.(0, 4)?.map?.((item) => (
            <HotelCard
              key={item?.id}
              image={IMAGE_URL + item?.image}
              title={item?.title}
              desc={item?.description}
              location={item?.location}
              price={item?.price}
              stars={item?.stars}
              features={JSON.parse(item?.features)}
            />
          ))}
        </section>
        <div className="flex items-center justify-center">
          <Link
            to={"/hotels"}
            className="w-full px-10 py-3 text-center border-2 rounded-md text-white bg-sky-600"
          >
            {t("see_more")}
          </Link>
        </div>
      </div>

      <div className="px-5 flex justify-between items-center xl:h-[500px]">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          className="xl:w-[500px] w-1/3 lg:block hidden"
        >
          <img
            className="aspect-video w-full h-full object-cover"
            src={Turkey}
            alt="Shuhrat tour"
          />
        </div>
        <div
          data-aos="fade-up"
          className="xl:w-[500px] p-5 text-center space-y-5 md:space-y-2"
        >
          <h2 className="text-2xl md:text-4xl font-agbalumo sm:text-base">Shuhrat tour</h2>
          <p className="md:text-base sm:text-xs">
            {t("flights_desc")}
          </p>
          <button className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 hover:duration-300">
            {t("book_now")}
          </button>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          className="xl:w-[500px] w-1/3 lg:block hidden"
        >
          <img
            className="aspect-video w-full h-full object-cover"
            src={Kazakhstan}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default index;
