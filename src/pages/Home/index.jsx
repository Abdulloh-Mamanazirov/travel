import AOS from "aos";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  About,
  Cities,
  Contact,
  Hotels,
  Showcase,
  Uzbekistan,
} from "./components";
import { Eng, Rus, Uzb } from "../../assets";

const index = () => {
  const showcase = useRef();
  const about = useRef();
  const gallery = useRef();
  const hotels = useRef();
  const contact = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let navbarClasses = ["navbar"];
  if (isScrolled) {
    navbarClasses.push("scrolled backdrop-blur-md");
  }

  return (
    <div>
      {/* navbar */}
      <nav className={navbarClasses.join(" ")}>
        <div
          className={`flex items-center justify-between p-1 ${
            isOpen && "bg-white"
          }`}
        >
          <Link onClick={() => scrollToSection(showcase)} to={"/"}>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <img
                src="/plane.png"
                alt="company logo"
                className="w-24 drop-shadow-lg"
              />
              <div className="flex flex-col font-agbalumo bg-white/50 backdrop-blur-md rounded-xl px-2">
                <h1
                  translate="no"
                  className="text-2xl md:text-3xl font-semibold"
                >
                  Shuhrat
                </h1>
                <p>tour</p>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <Link
              onClick={() => scrollToSection(showcase)}
              className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
            >
              {t("Nav_Home_Link")}
            </Link>
            <p className="text-xl">|</p>
            <Link
              onClick={() => scrollToSection(about)}
              className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
            >
              {t("Nav_About_Link")}
            </Link>
            <p className="text-xl">|</p>
            <Link
              onClick={() => scrollToSection(gallery)}
              className="text-xl font-semibold border px-3 py-1 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-gray-200"
            >
              {t("Nav_Gallery_Link")}
            </Link>
            <p className="text-xl">|</p>
            <Link
              onClick={() => scrollToSection(hotels)}
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
              onClick={() => scrollToSection(contact)}
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
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
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
                  scrollToSection(showcase);
                  setIsOpen(false);
                }}
                className="text-xl"
              >
                {t("Nav_Home_Link")}
              </Link>
              <Link
                onClick={() => {
                  scrollToSection(about);
                  setIsOpen(false);
                }}
                className="text-xl"
              >
                {t("Nav_About_Link")}
              </Link>
              <Link
                onClick={() => {
                  scrollToSection(gallery);
                  setIsOpen(false);
                }}
                className="text-xl"
              >
                {t("Nav_Gallery_Link")}
              </Link>
              <Link
                onClick={() => {
                  scrollToSection(hotels);
                  setIsOpen(false);
                }}
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
                  scrollToSection(contact);
                  setIsOpen(false);
                }}
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
                    <div
                      className="py-1 grid grid-cols-1 gap-2 px-1"
                      role="none"
                    >
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

      {/* showcase carousel */}
      <div ref={showcase}>
        <Showcase />
      </div>

      {/* gallery */}
      <div ref={gallery}>
        <Uzbekistan />
        <Cities />
      </div>

      {/* about section */}
      <div ref={about}>
        <About />
      </div>

      {/* hotels section */}
      <div ref={hotels}>
        <Hotels />
      </div>

      {/* contact section */}
      <div ref={contact}>
        <Contact />
      </div>

      {/* footer */}
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
            <a
              href="mailto:surikpurik2gmail.com"
              className="flex items-center space-x-2"
            >
              <span className="fa-solid fa-envelope" />
              <p>Gmail</p>
            </a>
            <a href="tel:+998997416611" className="flex items-center space-x-2">
              <span className="fa-solid fa-phone" />
              <p>+998997416611</p>
            </a>
            <a
              href="https://www.google.com/maps/place/41%C2%B022'07.7%22N+69%C2%B016'07.8%22E/@41.3688,69.268833,16z/data=!4m4!3m3!8m2!3d41.3688!4d69.268833?entry=ttu"
              target={"_blank"}
              className="flex items-center space-x-2"
            >
              <span className="fa-solid fa-location-dot" />
              <p>Yunusobod, Tashkent</p>
            </a>
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
              <a
                href="https://www.instagram.com/shuhrattour.uz"
                target={"_blank"}
              >
                <span className="fa-solid fa-brands fa-instagram text-xl cursor-pointer hover:text-pink-500" />
              </a>
              <a href="https://t.me/shuhrattour" target={"_blank"}>
                <span className="fa-brands fa-telegram text-xl cursor-pointer hover:text-blue-500" />
              </a>
            </div>
          </div>

          <div className="py-5 border-b">
            <h3 className="text-xl font-bold cursor-pointer mb-5">Site map</h3>
            <div className="flex flex-col gap-3">
              <Link
                onClick={() => scrollToSection(showcase)}
                className="text-base font-semibold hover:underline"
              >
                {t("Nav_Home_Link")}
              </Link>
              <Link
                onClick={() => scrollToSection(about)}
                className="text-base font-semibold hover:underline"
              >
                {t("Nav_About_Link")}
              </Link>
              <Link
                onClick={() => scrollToSection(gallery)}
                className="text-base font-semibold hover:underline"
              >
                {t("Nav_Gallery_Link")}
              </Link>
              <Link
                onClick={() => scrollToSection(hotels)}
                className="text-base font-semibold hover:underline"
              >
                {t("Nav_Hotels_Link")}
              </Link>
              <Link
                onClick={() => scrollToSection(contact)}
                className="text-base font-semibold hover:underline"
              >
                {t("Nav_Contact_Link")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
