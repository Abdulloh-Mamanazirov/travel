import AOS from "aos";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Eng, Rus, Uzb } from "../../assets";

const index = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <nav className={"navbar scrolled backdrop-blur-md"}>
      <div
        className={`flex items-center justify-between p-1 ${
          isOpen && "bg-white"
        }`}
      >
        <Link to={"/"}>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <img
              src="/plane.png"
              alt="company logo"
              className="w-24 drop-shadow-lg"
            />
            <div className="flex flex-col font-agbalumo">
              <h1
                translate="no"
                className="sm:text-xl md:text-3xl font-semibold"
              >
                Shuhrat
              </h1>
              <p>tour</p>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-3">
          <Link
            to={"/"}
            className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
          >
            {t("Nav_Home_Link")}
          </Link>
          <p className="text-xl">|</p>
          <Link
            to={"/"}
            className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
          >
            {t("Nav_About_Link")}
          </Link>
          <p className="text-xl">|</p>
          <Link
            to={"/"}
            className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
          >
            {t("Nav_Gallery_Link")}
          </Link>
          <p className="text-xl">|</p>
          <Link
            to={pathname === "/hotels" ? pathname : "/"}
            className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
          >
            {t("Nav_Hotels_Link")}
          </Link>
          <p className="text-xl">|</p>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            to={"/flights"}
            className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
          >
            {t("Nav_Flights_Link")}
          </Link>
          <p className="text-xl">|</p>
          <Link
            to={"/"}
            className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
          >
            {t("Nav_Contact_Link")}
          </Link>
          <p className="text-xl">|</p>
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="inline-flex gap-2 items-center font-semibold border px-3 py-[6px] rounded-lg bg-white"
          >
            <img
              src={
                i18n.language === "uz"
                  ? Uzb
                  : i18n.language === "en"
                  ? Eng
                  : i18n.language === "ru"
                  ? Rus
                  : null
              }
              className="w-5 aspect-square rounded-full"
            />
            {i18n.language === "uz"
              ? "O'zbek"
              : i18n.language === "en"
              ? "English"
              : i18n.language === "ru"
              ? "Russian"
              : "Languge"}
          </button>
          {isLanguageOpen && (
            <div
              className="origin-top-right absolute right-0 top-16 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="py-1 grid grid-cols-1 gap-2 px-1" role="none">
                <button
                  onClick={() => {
                    i18n.changeLanguage("uz");
                    setIsLanguageOpen(false);
                  }}
                  className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                  role="menuitem"
                >
                  <img src={Uzb} className="w-5 aspect-square rounded-full" />
                  <span className="truncate">O'zbek</span>
                </button>
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setIsLanguageOpen(false);
                  }}
                  className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                  role="menuitem"
                >
                  <img src={Eng} className="w-5 aspect-square rounded-full" />
                  <span className="truncate">English</span>
                </button>
                <button
                  onClick={() => {
                    i18n.changeLanguage("ru");
                    setIsLanguageOpen(false);
                  }}
                  className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                  role="menuitem"
                >
                  <img src={Rus} className="w-5 aspect-square rounded-full" />
                  <span className="truncate">Русский</span>
                </button>
              </div>
            </div>
          )}
        </div>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span
            className={`fa-solid ${
              isOpen ? "fa-solid fa-close" : "fa-bars"
            } fa-2xl`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="sidebar md:hidden bg-white pt-5 pb-20">
          <div className="flex flex-col gap-5 justify-center items-center">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/"}
              className="text-xl"
            >
              {t("Nav_Home_Link")}
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/"}
              className="text-xl"
            >
              {t("Nav_About_Link")}
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/"}
              className="text-xl"
            >
              {t("Nav_Gallery_Link")}
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/hotels"}
              className="text-xl"
            >
              {t("Nav_Hotels_Link")}
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/flights"}
              className="text-xl"
            >
              {t("Nav_Flights_Link")}
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to={"/"}
              className="text-xl"
            >
              {t("Nav_Contact_Link")}
            </Link>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="relative inline-flex gap-2 items-center font-semibold border px-3 py-[6px] rounded-lg bg-white"
            >
              <img
                src={
                  i18n.language === "uz"
                    ? Uzb
                    : i18n.language === "en"
                    ? Eng
                    : i18n.language === "ru"
                    ? Rus
                    : null
                }
                className="w-5 aspect-square rounded-full"
              />
              {i18n.language === "uz"
                ? "O'zbek"
                : i18n.language === "en"
                ? "English"
                : i18n.language === "ru"
                ? "Russian"
                : "Languge"}
              {isLanguageOpen && (
                <div
                  className="origin-top-right absolute right-0 top-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1 grid grid-cols-1 gap-2 px-1" role="none">
                    <button
                      onClick={() => {
                        i18n.changeLanguage("uz");
                        setIsLanguageOpen(false);
                      }}
                      className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                      role="menuitem"
                    >
                      <img
                        src={Uzb}
                        className="w-5 aspect-square rounded-full"
                      />
                      <span className="truncate">O'zbek</span>
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage("en");
                        setIsLanguageOpen(false);
                      }}
                      className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                      role="menuitem"
                    >
                      <img
                        src={Eng}
                        className="w-5 aspect-square rounded-full"
                      />
                      <span className="truncate">English</span>
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage("ru");
                        setIsLanguageOpen(false);
                      }}
                      className={`bg-white rounded-md px-4 py-2 text-sm text-start items-center inline-flex gap-2 transition hover:bg-gray-200`}
                      role="menuitem"
                    >
                      <img
                        src={Rus}
                        className="w-5 aspect-square rounded-full"
                      />
                      <span className="truncate">Русский</span>
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default index;
