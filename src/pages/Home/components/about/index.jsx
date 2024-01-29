import { useTranslation } from "react-i18next";
import { Azerbaijan, Uzbekistan } from "../../../../assets";

const index = () => {
  const { t } = useTranslation();
  return (
    <div className="w-4/5 m-auto cursor-default my-10">
      <h1 className="text-4xl font-bold font-serif text-center">
        {t("about_us")}
      </h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div data-aos="fade-right" className="w-full space-y-5">
          <div className="h-80 grid place-items-center drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="h-64 aspect-square"
              src={"/plane.png"}
              alt="Shuhrat tour"
            />
          </div>
          <div>
            <h2 className="font-bold">Shuhrat Tour -</h2>
            <h1 className="text-2xl font-bold">{t("about1_title")}</h1>
          </div>
          <p className="text-sm">{t("about1_desc")}</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="w-full flex flex-col-reverse md:flex-col space-y-4 text-left"
        >
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold">Shuhrat Tour -</h2>
            <h1 className="font-bold text-2xl">{t("about2_title")}</h1>
            <p className="text-sm">{t("about2_desc")}</p>
          </div>
          <img
            className="drop-shadow-2xl h-80 object-cover border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src={Uzbekistan}
            alt="Shuhrat tour"
          />
        </div>
      </div>

      <div data-aos="fade" className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="https://commonslibrary.parliament.uk/content/uploads/2018/02/The_City_London-scaled.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <a
            href="https://www.google.com/maps/place/41%C2%B022'07.7%22N+69%C2%B016'07.8%22E/@41.3688,69.268833,16z/data=!4m4!3m3!8m2!3d41.3688!4d69.268833?entry=ttu"
            target={"_blank"}
            className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300"
          >
            {t("view_in_map")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
