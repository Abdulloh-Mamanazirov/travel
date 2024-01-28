import { useTranslation } from "react-i18next";
import { image1, image2, image3, image4, image5 } from "../../../../assets";

const index = () => {
  const { t } = useTranslation();
  return (
    <div className="my-10 text-center">
      <h2
        data-aos="fade"
        className="text-3xl px-2 sm:text-5xl font-bold font-serif grayscale-0 subpixel-antialiased"
      >
        {t("discover_uzbekistan_title")}
      </h2>
      <p className="text-lg px-2 sm:leading-10">
        {t("discover_uzbekistan_desc")}
      </p>
      <div className="w-4/5 m-auto cursor-default">
        <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
          <div className="row-span-1 col-span-2">
            <img
              data-aos="fade-right"
              className="w-full h-full object-cover object-center rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={image3}
              alt="shuhrat tour uzb image"
            />
          </div>
          <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              data-aos="fade-right"
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={image2}
              alt="shuhrat tour uzb image"
            />
          </div>
          <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              data-aos="fade-right"
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={image4}
              alt="shuhrat tour uzb image"
            />
          </div>
          <div className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1">
            <img
              data-aos="fade-right"
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={image5}
              alt="shuhrat tour uzb image"
            />
          </div>
          <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              data-aos="fade-right"
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={image1}
              alt="shuhrat tour uzb image"
            />
          </div>
          <div className="hidden md:block lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              data-aos="fade-right"
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src="https://univ-silkroad.uz/media/k2/items/cache/8f704c6e91e045c72378c71d940a59ce_L.jpg"
              alt="shuhrat tour uzb image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
