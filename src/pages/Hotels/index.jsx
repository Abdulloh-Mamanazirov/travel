import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HotelCard, Navbar } from "../../components";
import { IMAGE_URL } from "../../constants";

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
      <div className="mb-28">
        <Navbar />
      </div>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold leading-loose">
          {t("hotels_title")}
        </h3>
        <p className="text-lg mx-auto w-full md:w-1/3">{t("hotels_desc")}</p>
      </div>
      {data?.length === 0 && (
        <div className="text-center mt-16">
          <span className="fa-solid fa-box-open text-5xl text-gray-400" />
          <h3 className="text-2xl text-gray-700">Mehmonxonalar mavjud emas</h3>
        </div>
      )}
      <div className="grid mx-auto mb-10 md:grid-cols-2 gap-5 w-11/12 md:w-10/12">
        {data?.map?.((item) => (
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
      </div>
      <div>
        <footer className="w-4/5 m-auto py-10 cursor-default">
          <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-start my-10">
            <div className="space-y-5 py-5 border-b">
              <div className="flex flex-col">
                <h1
                  translate="no"
                  className="sm:text-xl md:text-3xl font-semibold"
                >
                  Shuhrat
                </h1>
                <p>tour</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="fa-solid fa-phone" />
                <p>(898)-645-434</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="fa-solid fa-message" />
                <p>(898)-645-434</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="fa-solid fa-location-dot" />
                <p>Namangan</p>
              </div>
            </div>

            <div className="space-y-5 py-5 border-b">
              <img
                src="/plane.png"
                alt="company logo"
                className="w-20 sm:mx-auto drop-shadow-lg"
              />
              <h3 className="text-xl sm:text-center font-bold cursor-pointer">
                Social media
              </h3>
              <div className="flex sm:justify-center space-x-5">
                <a href="https://www.facebook.com" target={"_blank"}>
                  <span className="fa-solid fa-brands fa-facebook text-xl cursor-pointer hover:text-blue-600" />
                </a>
                <a href="https://www.instagram.com" target={"_blank"}>
                  <span className="fa-solid fa-brands fa-instagram text-xl cursor-pointer hover:text-pink-500" />
                </a>
                <a href="https://www.twitter.com" target={"_blank"}>
                  <span className="fa-solid fa-brands fa-twitter text-xl cursor-pointer hover:text-sky-500" />
                </a>
                <a href="https://www.telegram.org" target={"_blank"}>
                  <span className="fa-solid fa-paper-plane text-xl cursor-pointer hover:text-blue-500" />
                </a>
              </div>
            </div>

            <div className="py-5 border-b">
              <h3 className="text-xl font-bold cursor-pointer mb-5">
                Site map
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-base font-semibold hover:underline"
                >
                  {t("Nav_Home_Link")}
                </Link>
                <Link
                  to="/"
                  className="text-base font-semibold hover:underline"
                >
                  {t("Nav_About_Link")}
                </Link>
                <Link
                  to="/"
                  className="text-base font-semibold hover:underline"
                >
                  {t("Nav_Gallery_Link")}
                </Link>
                <Link
                  to="/hotels"
                  className="text-base font-semibold hover:underline"
                >
                  {t("Nav_Hotels_Link")}
                </Link>
                <Link
                  to="/flights"
                  className="text-base font-semibold hover:underline"
                >
                  {t("Nav_Flights_Link")}
                </Link>
                <Link
                  to="/"
                  className="text-base font-semibold hover:underline"
                >
                  {t("Nav_Contact_Link")}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default index;
