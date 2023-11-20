import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "uz",
  lng: "uz",
  resources: {
    uz: {
      translation: {
        // Navbar
        Nav_Home_Link: "Bosh Sahifa",
        Nav_About_Link: "Biz Haqimizda",
        Nav_Gallery_Link: "Galereya",
        Nav_Hotels_Link: "Mehmonxonalar",
        Nav_Contact_Link: "Bog'lanish",

        // Discover section
        discover_uzbekistan_title: "O'zbekistonni biz bilan kashf eting!",
        discover_uzbekistan_desc:
          "Biz bilan O'zbekistonning ko'ngil ochar va ziyoratgoh go'shalariga sayohat qiling.",
        popular_places: "Mashhur joylar.",

        // about section
        about_us: "Biz haqimizda.",
        view_in_map: "Xaritada ko'rish",

        // hotels section
        hotels_title: "Mehmonxonalar.",

        // contact section
        contact_title: "Biz bilan bog'lanish",
        contact_name: "Ismingiz",
        contact_phone: "Telefon raqam",
        contact_message: "Xabar",
        contact_send: "Yuborish",
        contact_desc:
          "To'liq ismingiz va telefon raqamingizni yozib qoldiring. Biz siz bilan aloqaga chiqamiz.",
      },
    },
    en: {
      translation: {
        // Navbar
        Nav_Home_Link: "Home",
        Nav_About_Link: "About",
        Nav_Gallery_Link: "Gallery",
        Nav_Hotels_Link: "Hotels",
        Nav_Contact_Link: "Contact",

        // Discover section
        discover_uzbekistan_title: "Discover Uzbekistan with us!",
        discover_uzbekistan_desc:
          "Travel with us to the entertainment and pilgrimage corners of Uzbekistan.",
        popular_places: "Popular places.",

        // about section
        about_us: "About us.",
        view_in_map: "View in map",

        // hotels section
        hotels_title: "Hotels.",

        // contact section
        contact_title: "Contact us",
        contact_name: "Full name",
        contact_phone: "Phone number",
        contact_message: "Message",
        contact_send: "Send",
        contact_desc:
          "Leave your full name and phone number. We will contact you as soon as possible.",
      },
    },
    ru: {
      translation: {
        // Navbar
        Nav_Home_Link: "Главная страница",
        Nav_About_Link: "О нас",
        Nav_Gallery_Link: "Галерея",
        Nav_Hotels_Link: "Отели",
        Nav_Contact_Link: "Контакт",

        // Discover section
        discover_uzbekistan_title:
          "Откройте для себя Узбекистан вместе с нами!",
        discover_uzbekistan_desc:
          "Путешествуйте с нами по развлекательным и паломническим уголкам Узбекистана.",
        popular_places: "Популярные места.",

        // about section
        about_us: "О нас",
        view_in_map: "Посмотреть на карте",

        // hotels section
        hotels_title: "Отели.",

        // contact section
        contact_title: "Связаться с нами",
        contact_name: "Имя",
        contact_phone: "Номер телефона",
        contact_message: "Сообщение",
        contact_send: "Отправлять",
        contact_desc:
          "Оставьте свое полное имя и номер телефона. Мы свяжемся с вами как можно скорее.",
      },
    },
  },
});

export default i18n;
