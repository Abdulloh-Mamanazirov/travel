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

        // Showcase
        uzb_title: "Travel Uzbeksitan",
        uzb_desc:
          "O'zbekiston bo'ylab sayohat qiling. Biz bilan eng mashhur, zamonaviy va shuningdek tarixiy joylarga tashrif buyuring.",
        dubai_title: "Dubai Skyline",
        dubai_desc:
          "Dunyodagi eng baland bino bo'lgan Burj Khalifa, Dubayning shahar va tabiiy manzarasiga hukmronlik qiladi.",
        astana_title: "Golden Mosque",
        astana_desc:
          "Nur-Astana masjidi - bu Astana, Qozog'istondagi masjidi. U Markaziy Osiyodagi uchinchi eng katta masjid.",
        russia_title: "Red square",
        russia_desc:
          "Qizil maydon - Moskva, Rossiya poytaxtining eng qadimgi va katta maydonlaridan biri. U Moskvaning tarixiy markazida, Kremlning sharqiy devorlarida joylashgan.",
        bay_title: "Serene Bay View",
        bay_desc:
          "Yashil tog'lar bilan o'ralgan tabiatdan zavqoling. Tabiat bag'rida turli xil mashg'ulotlar bilan shug'ullaning",
        istanbul_title: "Istanbul Skyline",
        istanbul_desc:
          "Istanbulning ko'rinishi, unumdor Hagia Sophia masjidi va uning to'rt minareti, zamonaviy binolar va rangli osmon bilan farqlanadi.",

        // Discover section
        discover_uzbekistan_title: "O'zbekistonni biz bilan kashf eting!",
        discover_uzbekistan_desc:
          "Biz bilan O'zbekistonning ko'ngil ochar va ziyoratgoh go'shalariga sayohat qiling.",
        popular_places: "Mashhur joylar.",

        // about section
        about_us: "Biz haqimizda.",
        view_in_map: "Xaritada ko'rish",
        about1_title: "Markaziy Osiyoni biz bilan kashf eting",
        about1_desc:
          "Shuhrat Tour - bu sizga Markaziy Osiyo mo'jizalarini kashf qilishda yordam beradigan mahalliy ekskursiya xizmati. Biz O'zbekistonning Toshkent shahrida joylashganmiz, lekin biz mintaqaning istalgan nuqtasiga, masalan Saudiya Arabistoni, Turkiya, Ozarbayjon, Turkmaniston va boshqa ko'plab mamlakatlarga sayohatlarni tashkil qilishimiz mumkin. Biz qat'iy paketlar va ommaviy turlarni sotadigan odatiy sayohat agentligi emasmiz. Biz har bir mijoz uchun moslashtirilgan va moslashuvchan marshrutlarni yaratadigan ishtiyoqli va bilimli mahalliy gidlar jamoasimiz. Biz sizning qiziqishlaringiz, afzalliklaringiz va byudjetingizni tinglaymiz va sizga eng mos keladigan turni loyihalashtiramiz.",
        about2_title: "Osiyo bo'ylab sayohat qiling",
        about2_desc:
          "Tarixiy va madaniy sayohatlardan tortib, Ipak yo‘lidagi shaharlar va yodgorliklarga, tog‘lar, cho‘llar va ko‘llarga sarguzasht va tabiat sayohatlarigacha bo‘lgan turli xil variantlardan birini tanlashingiz mumkin. Shuningdek, siz mahalliy hayot va urf-odatlarga sho'ng'ishingiz va Markaziy Osiyoning og'izni sug'oradigan oshxonasidan tatib ko'rishingiz mumkin. Sayohatingiz oson va qiziqarli bo'lishi uchun biz transport va turar joydan tortib vizalar va ruxsatnomalargacha hamma narsani hal qilamiz. Shuningdek, biz sizning xotirjamligingiz uchun sizga eng yaxshi jihozlar va xavfsizlik choralarini taqdim etamiz.",

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

        // Showcase
        uzb_title: "Travel Uzbeksitan",
        uzb_desc:
          "Travel across Uzbekistan. Visit the most popular, modern and, at the same time historic places with us.",
        dubai_title: "Dubai Skyline",
        dubai_desc:
          "The Burj Khalifa, the world’s tallest building, dominates the stunning view of Dubai’s urban and natural landscape.",
        astana_title: "Golden Mosque",
        astana_desc:
          "All images Nur-Astana Mosque Mosque in Kazakhstan The Nur-Astana Mosque, is a mosque in Astana, Kazakhstan. It is third largest mosque in Central Asia.",
        russia_title: "Red square",
        russia_desc:
          "Red Square is one of the oldest and largest squares in Moscow, the capital of Russia. It is located in Moscow's historic centre, in the eastern walls of the Kremlin.",
        bay_title: "Serene Bay View",
        bay_desc:
          "A tranquil scene at a bay surrounded by towering green mountains, with boats gently floating on the calm waters",
        istanbul_title: "Istanbul Skyline",
        istanbul_desc:
          "A stunning view of Istanbul’s skyline, featuring the iconic Hagia Sophia mosque and its four minarets, contrasted by the modern buildings and the colorful sky.",

        // Discover section
        discover_uzbekistan_title: "Discover Uzbekistan with us!",
        discover_uzbekistan_desc:
          "Travel with us to the entertainment and pilgrimage corners of Uzbekistan.",
        popular_places: "Popular places.",

        // about section
        about_us: "About us.",
        view_in_map: "View in map",
        about1_title: "Experience the Best of Central Asia",
        about1_desc:
          "Shuhrat Tour is a local tour guide service that helps you discover the wonders of Central Asia. We are based in Tashkent, Uzbekistan, but we can arrange tours to any destination in the region, such as Saudi Arabia, Turkey, Azerbaijan, Turkmenistan and many others. We are not a typical travel agency that sells fixed packages and mass tours. We are a team of passionate and knowledgeable local guides who create personalized and flexible itineraries for each client. We listen to your interests, preferences, and budget, and design a tour that suits you best.",
        about2_title: "Your Personal Guide across Asia",
        about2_desc:
          "You can choose from a variety of options, from historical and cultural tours to the Silk Road cities and monuments, to adventure and nature tours to the mountains, deserts, and lakes. You can also immerse yourself in the local life and traditions, and sample the mouth-watering cuisine of Central Asia. We handle everything, from transportation and accommodation, to visas and permits, to make sure your trip is easy and enjoyable. We also provide you with the best equipment and safety measures for your peace of mind.",

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

        // Showcase
        uzb_title: "Travel Uzbeksitan",
        uzb_desc:
          "Путешествуйте по Узбекистану. Посетите самые популярные, современные и в то же время исторические места с нами.",
        dubai_title: "Dubai Skyline",
        dubai_desc:
          "Бурдж Халифа, самое высокое здание в мире, доминирует в потрясающем виде на городской и природный ландшафт Дубая.",
        astana_title: "Golden Mosque",
        astana_desc:
          "Все изображения мечети Нур-Астана в Казахстане. Мечеть Нур-Астана - это мечеть в Астане, Казахстан. Это третья по величине мечеть в Центральной Азии.",
        russia_title: "Red square",
        russia_desc:
          "Красная площадь - одна из старейших и крупнейших площадей в Москве, столице России. Она расположена в историческом центре Москвы, у восточных стен Кремля.",
        bay_title: "Serene Bay View",
        bay_desc:
          "Спокойная сцена в заливе, окруженном высокими зелеными горами, с лодками, мягко плывущими по спокойным водам",
        istanbul_title: "Istanbul Skyline",
        istanbul_desc:
          "Потрясающий вид на горизонт Стамбула, на котором видна знаменитая мечеть Айя-София со своими четырьмя минаретами, контрастирующая с современными зданиями и красочным небом.",

        // Discover section
        discover_uzbekistan_title:
          "Откройте для себя Узбекистан вместе с нами!",
        discover_uzbekistan_desc:
          "Путешествуйте с нами по развлекательным и паломническим уголкам Узбекистана.",
        popular_places: "Популярные места.",

        // about section
        about_us: "О нас",
        view_in_map: "Посмотреть на карте",
        about1_title: "Откройте для себя лучшее из Центральной Азии",
        about1_desc:
          "Shuhrat Tour — это местная служба гидов, которая поможет вам открыть для себя чудеса Центральной Азии. Мы находимся в Ташкенте, Узбекистан, но можем организовать туры в любую точку региона, например, в Саудовскую Аравию, Турцию, Азербайджан, Туркменистан и многие другие. Мы не типичное туристическое агентство, которое продает фиксированные пакеты и массовые туры. Мы — команда увлеченных и знающих местных гидов, которые создают индивидуальные и гибкие маршруты для каждого клиента. Мы прислушиваемся к вашим интересам, предпочтениям и бюджету и разрабатываем тур, который подойдет вам лучше всего.",
        about2_title: "Ваш личный гид по Азии",
        about2_desc:
          "Вы можете выбирать из множества вариантов: от исторических и культурных туров по городам и памятникам Шелкового пути до приключенческих и природных туров в горы, пустыни и озера. Вы также можете погрузиться в местную жизнь и традиции и попробовать аппетитную кухню Центральной Азии. Мы позаботимся обо всем: от транспорта и проживания до виз и разрешений, чтобы ваша поездка была легкой и приятной. Мы также предоставим вам лучшее оборудование и меры безопасности для вашего спокойствия.",

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
