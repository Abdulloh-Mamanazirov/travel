import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const getDateInString = (data) => {
  let day;
  let month;
  let date = new Date(data).getDate();
  let year = new Date(data).getFullYear();

  switch (new Date(data).getMonth() + 1) {
    case 1:
      month = "Yanvar";
      break;
    case 2:
      month = "Fanvar";
      break;
    case 3:
      month = "Mart";
      break;
    case 4:
      month = "Aprel";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Iyun";
      break;
    case 7:
      month = "Iyul";
      break;
    case 8:
      month = "Avgust";
      break;
    case 9:
      month = "Sentabr";
      break;
    case 10:
      month = "Oktabr";
      break;
    case 11:
      month = "Noyabr";
      break;
    case 12:
      month = "Dekabr";
      break;
    default:
      month = "Oy";
      break;
  }

  switch (new Date(data).getDay()) {
    case 1:
      day = "Dushanba";
      break;
    case 2:
      day = "Seshanba";
      break;
    case 3:
      day = "Chorshanba";
      break;
    case 4:
      day = "Payshanba";
      break;
    case 5:
      day = "Juma";
      break;
    case 6:
      day = "Shanba";
      break;
    case 7:
      day = "Yakshanba";
      break;
    default:
      break;
  }

  return `${day}, ${date} ${month}, ${year}`;
};

const index = ({
  date,
  airways,
  klas,
  kg,
  from,
  from_time,
  to,
  to_time,
  price,
  component,
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      {component}
      <div className="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
        <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
          <span className="fa-solid fa-plane" />
          <h1 className="ml-2 uppercase font-bold text-gray-500">departure</h1>
          <p className="pl-2 ml-auto font-normal text-gray-500">
            {getDateInString(date)}
          </p>
        </div>
        <div className="mt-2 flex justify-start bg-white p-2">
          <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
            <span className="fa-solid fa-plane text-gray-500" />
            <p className="font-normal text-sm ml-1 text-gray-500">{klas}</p>
          </div>
        </div>
        <div className="mt-2 grid md:grid-cols-3">
          <div className="col-span-1 flex flex-row place-items-center p-2">
            <div className="flex flex-col ml-2">
              <p className="font-bold">{airways}</p>
              <div className="text-xs text-gray-500">{kg} kg</div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-3 items-center">
            <div className="flex flex-col p-2">
              <p className="font-bold">
                <span className="fa-solid fa-plane-departure" />
              </p>
              <p className="text-lg text-gray-500">{from}</p>
              <p>{from_time}</p>
            </div>
            <div>
              <span className="fa-solid fa-arrow-right bg-orange-500 p-3 rounded-full text-white" />
            </div>
            <div className="flex flex-col p-2">
              <p className="font-bold">
                <span className="fa-solid fa-plane-arrival" />
              </p>
              <p className="text-lg text-gray-500">{to}</p>
              <p>{to_time}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 p-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="fa-solid fa-ticket bg-gray-200 p-1 rounded-md" />
            <h4 className="text-lg font-semibold">
              {!price?.includes?.("$") && "$"} {price}
            </h4>
          </div>
          <Link
            to={`/book?from=${from}&to=${to}`}
            className="bg-green-500 text-white p-2 -skew-x-12"
          >
            <p className="skew-x-12">{t("book_now")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
