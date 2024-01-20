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
          <img
            className="w-full drop-shadow-2xl h-80 object-cover rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src={Azerbaijan}
            alt="Shuhrat tour"
          />
          <div>
            <h2 className="font-bold">Shuhrat Tour -</h2>
            <h1 className="text-2xl font-bold">
              Experience the Best of Central Asia
            </h1>
          </div>
          <p className="text-sm">
            Shuhrat Tour is a local tour guide service that helps you discover
            the wonders of Central Asia. We are based in Tashkent, Uzbekistan,
            but we can arrange tours to any destination in the region, such as
            Saudi Arabia, Turkey, Azerbaijan, Turkmenistan and many others.
            <br />
            We are not a typical travel agency that sells fixed packages and
            mass tours. We are a team of passionate and knowledgeable local
            guides who create personalized and flexible itineraries for each
            client. We listen to your interests, preferences, and budget, and
            design a tour that suits you best.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="w-full flex flex-col-reverse md:flex-col space-y-4 text-left"
        >
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold">Shuhrat Tour -</h2>
            <h1 className="font-bold text-2xl">
              Your Personal Guide across Asia
            </h1>
            <p className="text-sm">
              You can choose from a variety of options, from historical and
              cultural tours to the Silk Road cities and monuments, to adventure
              and nature tours to the mountains, deserts, and lakes. You can
              also immerse yourself in the local life and traditions, and sample
              the mouth-watering cuisine of Central Asia.
              <br />
              We handle everything, from transportation and accommodation, to
              visas and permits, to make sure your trip is easy and enjoyable.
              We also provide you with the best equipment and safety measures
              for your peace of mind.
            </p>
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
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
            {t("view_in_map")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default index;
