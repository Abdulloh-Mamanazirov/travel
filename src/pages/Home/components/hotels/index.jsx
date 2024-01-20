import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HotelCard } from "../../../../components";

const index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="my-16 px-3">
        <h1 className="text-2xl md:text-4xl text-center font-bold font-serif">
          {t("hotels_title")}
        </h1>
        <section className="grid md:grid-cols-2 gap-10 my-10 pb-10 border-b">
          {new Array(4).fill(null).map((_, ind) => (
            <HotelCard
              key={ind}
              image={
                "https://www.citystyleandliving.com/wordpress/wp-content/uploads/2019/01/outside.jpg"
              }
              title="The best hotel"
              days={3}
              desc={"lorem ipsum dolor sit amet qwerty, olgo"}
              location={"London"}
              price={"300"}
              stars={5}
              features={["Good", "Better", "The best"]}
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
            src="https://commonslibrary.parliament.uk/content/uploads/2018/02/The_City_London-scaled.jpg"
            alt="Shuhrat tour"
          />
        </div>
        <div
          data-aos="fade-up"
          className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2"
        >
          <h2 className="md:text-4xl sm:text-base">Shuhrat tour</h2>
          <p className="md:text-base sm:text-xs">
            Book your journey now. Feel the true joy of travelling with us.
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
            src="https://commonslibrary.parliament.uk/content/uploads/2018/02/The_City_London-scaled.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default index;
