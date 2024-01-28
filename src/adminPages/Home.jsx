import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-10 grid sm:grid-cols-2 gap-7 mx-auto w-11/12 sm:w-9/12">
      <Link
        to={"/admin/hotels"}
        className="flex items-center flex-col gap-7 border rounded-xl p-5 shadow-lg transition-all hover:scale-105"
      >
        <span className="fa-solid fa-hotel text-5xl text-gray-600" />
        <h3 className="text-3xl md:text-5xl text-gray-700">Mehmonxonalar</h3>
      </Link>
      <Link
        to={"/admin/flights"}
        className="flex items-center flex-col gap-7 border rounded-xl p-5 shadow-lg transition-all hover:scale-105"
      >
        <span className="fa-solid fa-plane-departure text-5xl text-gray-600" />
        <h3 className="text-3xl md:text-5xl text-gray-700">Parvozlar</h3>
      </Link>
    </div>
  );
};

export default Home;
