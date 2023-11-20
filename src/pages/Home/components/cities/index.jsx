import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-10 mt-10">
      <h1 className="text-center text-3xl px-2 sm:text-5xl font-bold font-serif text-blue-900">
        {t("popular_places")}
      </h1>
      <div style={{ transition: "all 900ms ease-in-out 0s", opacity: 1 }}>
        <div className="grid lg:grid-cols-10 gap-2 md:grid-cols-12">
          <div
            data-aos="fade-up"
            className="lg:col-span-4 md:col-span-5 sx:col-span-12 md:justify-center h-80 grid p-4 justify-center items-center"
            style={{
              backgroundImage: `url("https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSWpM_hQozSYzMswAjEAjY6nQMr6nsfd7OqoV5i4gKmBGOVysC8c7WpP9V9vh-2sG82yEyIPMo03zHNRRNOX7iFigEic4FkxwFgwKUdOw")`,
              backgroundPosition: " center center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-3 sx:col-span-12 sx:h-80 bg-gradient-to-br from-blue-900 to-sky-700"
            style={{
              backgroundImage: `url("https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSWpM_hQozSYzMswAjEAjY6nQMr6nsfd7OqoV5i4gKmBGOVysC8c7WpP9V9vh-2sG82yEyIPMo03zHNRRNOX7iFigEic4FkxwFgwKUdOw")`,
              backgroundPosition: " center center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-3 sx:col-span-12 sx:h-80 bg-gradient-to-br from-blue-900 to-sky-600"
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-1 sx:col-span-12 bg-gradient-to-br from-blue-900 to-sky-600"
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 lg:h-80 md:col-span-1 sx:col-span-12 sx:h-0 bg-gradient-to-br from-blue-900 to-sky-700"
            style={{
              backgroundImage: `url(
                "https://lh4.googleusercontent.com/proxy/-SEydC6Y6JlSPT37VLGdEXorctSy_SOdytHJ7bWxwTGwu4JT4i2grVDmVBv84Fc1fOad-e-cqHy228WqOxFNZ40I2C2RjoUb7tkRe_aQuK6Um79M-py5ntHnRsVTnsRhtWMFK19PCfZ68sG_nvbp3DvKdijTyA=w675-h390-n-k-no"
              )`,
              backgroundPosition: " center center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-3 sx:col-span-12 sx:h-80 bg-gradient-to-br from-blue-900 to-sky-600"
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-3 sx:col-span-12 sx:h-80 bg-gradient-to-br from-blue-900 to-sky-700"
            style={{
              backgroundImage: `url(
                "https://lh4.googleusercontent.com/proxy/-SEydC6Y6JlSPT37VLGdEXorctSy_SOdytHJ7bWxwTGwu4JT4i2grVDmVBv84Fc1fOad-e-cqHy228WqOxFNZ40I2C2RjoUb7tkRe_aQuK6Um79M-py5ntHnRsVTnsRhtWMFK19PCfZ68sG_nvbp3DvKdijTyA=w675-h390-n-k-no"
              )`,
              backgroundPosition: " center center",
              backgroundSize: " cover",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-4 md:col-span-5 sx:col-span-12 md:justify-center h-80 grid p-4 justify-center items-center"
            style={{
              backgroundImage: `url(
                "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSB8BXHMEBzFDUx_s6yghLO1nCilWpt9hku5TMkuUW4ca-MIpvxo7AGlcP1sSbcXezLTM2EJ4q6oATGne4D0QugG7cjf7ObbvcP5HgMdEw"
              )`,
              backgroundPosition: " center center",
              backgroundSize: " cover",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-4 md:col-span-5 sx:col-span-12 md:justify-center h-80 grid p-4 justify-center items-center"
            style={{
              backgroundImage: `url(
                "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSB8BXHMEBzFDUx_s6yghLO1nCilWpt9hku5TMkuUW4ca-MIpvxo7AGlcP1sSbcXezLTM2EJ4q6oATGne4D0QugG7cjf7ObbvcP5HgMdEw"
              )`,
              backgroundPosition: " center center",
              backgroundSize: " cover",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-3 sx:col-span-12 sx:h-80 bg-gradient-to-br from-blue-900 to-sky-700"
            style={{
              backgroundImage: `url(
                "https://lh5.googleusercontent.com/p/AF1QipOXpv5X3s1FB_tGU9fCAjbLzp9dK8trayL09HM=w675-h390-n-k-no"
              )`,
              backgroundPosition: " center center",
              backgroundSize: " cover",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-3 sx:col-span-12 sx:h-80 bg-gradient-to-br from-blue-900 to-sky-600"
          ></div>
          <div
            data-aos="fade-up"
            className="lg:col-span-2 md:col-span-1 sx:col-span-12 sx:h-80 bg-gradient-to-br from-blue-900 to-sky-600"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default index;
