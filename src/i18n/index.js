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
        Nav_Flights_Link: "Parvozlar",
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
        hotels_desc:
          "Dunyo bo'ylab biz bilan hamkorlik qiluvchi eng yaxshi, saralangan mehmonxonalarni ko'rib chiqing.",
        flights_title: "Parvozlar.",
        flights_desc:
          "Bizning tur kompaniyamiz bilan parvozning haqiqiy zavqini his eting. Biz bilan dunyo bo'ylab sayohat qiling.",

        // contact section
        contact_title: "Biz bilan bog'lanish",
        contact_name: "Ismingiz",
        contact_phone: "Telefon raqam",
        contact_message: "Xabar",
        contact_send: "Yuborish",
        contact_desc:
          "To'liq ismingiz va telefon raqamingizni yozib qoldiring. Biz siz bilan aloqaga chiqamiz.",
        see_more: "Ko'proq ko'rish",
        book_now: "Buyurtma berish",
      },
    },
    en: {
      translation: {
        // Navbar
        Nav_Home_Link: "Home",
        Nav_About_Link: "About",
        Nav_Gallery_Link: "Gallery",
        Nav_Hotels_Link: "Hotels",
        Nav_Flights_Link: "Flights",
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
        hotels_desc:
          "Check out the best, featured hotels we partner with around the world",
        flights_title: "Flights.",
        flights_desc:
          "Feel the true joy of flight with our tour company. Travel around the world with us",

        // contact section
        contact_title: "Contact us",
        contact_name: "Full name",
        contact_phone: "Phone number",
        contact_message: "Message",
        contact_send: "Send",
        contact_desc:
          "Leave your full name and phone number. We will contact you as soon as possible.",
        see_more: "See more",
        book_now: "Book now",
      },
    },
    ru: {
      translation: {
        // Navbar
        Nav_Home_Link: "Главная страница",
        Nav_About_Link: "О нас",
        Nav_Gallery_Link: "Галерея",
        Nav_Hotels_Link: "Отели",
        Nav_Flights_Link: "Рейсы",
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
        hotels_desc:
          "Ознакомьтесь с лучшими избранными отелями по всему миру, с которыми мы сотрудничаем",
        flights_title: "Рейсы.",
        flights_desc:
          "Почувствуйте настоящую радость полета вместе с нашей туркомпанией. Путешествуйте по миру вместе с нами",

        // contact section
        contact_title: "Связаться с нами",
        contact_name: "Имя",
        contact_phone: "Номер телефона",
        contact_message: "Сообщение",
        contact_send: "Отправлять",
        contact_desc:
          "Оставьте свое полное имя и номер телефона. Мы свяжемся с вами как можно скорее.",
        see_more: "Узнать больше",
        book_now: "Забронируйте сейчас",
      },
    },
  },
});

export default i18n;
