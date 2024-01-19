import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  useEffect(() => {
    setFrom(
      search
        .replaceAll("from", "")
        .replaceAll("to", "")
        .replaceAll("?", "")
        .replaceAll("=", "")
        .split("&")[0]
    );
    setTo(
      search
        .replaceAll("from", "")
        .replaceAll("to", "")
        .replaceAll("?", "")
        .replaceAll("=", "")
        .split("&")[1]
    );
  }, [search]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, phone, from, to, area, region, address } = e.target;
    const data = {
      name: name.value,
      phone: phone.value,
      from: from.value,
      to: to.value,
      area: area.value,
      region: region.value,
      address: address.value,
    };
    console.log(data);
  }

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                F.I.Sh
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Tel. raqam
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="from"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Qayerdan
                  </label>
                  <input
                    type="text"
                    name="from"
                    id="from"
                    value={from}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="to"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Qayerga
                  </label>
                  <input
                    type="text"
                    name="to"
                    id="to"
                    value={to}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Yashash manzilingiz
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Viloyat"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      placeholder="Tuman / Shahar"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Manzil"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => navigate(-1)}
                className="col-span-1  hover:shadow-form w-full rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                <span className="fa-solid fa-arrow-left" />
              </button>
              <button className="col-span-3 hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Buyurtma berish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
