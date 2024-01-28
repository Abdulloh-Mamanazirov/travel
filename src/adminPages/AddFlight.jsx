import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Hotels = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const {
      date,
      class: flight_class,
      flight_time,
      from_place,
      from_time,
      to_place,
      to_time,
      price,
      airways,
    } = e.target;
    const data = {
      date: date.value,
      class: flight_class.value,
      flight_time: flight_time.value,
      from_place: from_place.value,
      from_time: from_time.value,
      to_place: to_place.value,
      to_time: to_time.value,
      price: price.value,
      airways: airways.value,
    };

    let res = await axios
      .post("/flights", data)
      .catch((err) => toast.error(err?.response?.data))
      .finally(() => setLoading(false));

    if (res.status === 200) {
      toast.success(res?.data);
      navigate("/admin/flights");
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl px-4 mx-auto ">
        <div className="p-6 rounded-md shadow-md border">
          <h2 className="mb-6 text-xl text-center font-medium leading-6">
            Parvoz qo'shish
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="container px-4 mx-auto"></div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium " htmlFor="date">
                Sanasi *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="class"
              >
                Klass *
              </label>
              <select
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                name="class"
              >
                <option value="Ekonom">Ekonom</option>
                <option value="Business">Business</option>
                <option value="Premium">Premium</option>
                <option value="Aniqlanmagan">Aniqlanmagan</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="flight_time"
              >
                Maksimal yuk og'irligi *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="number"
                id="flight_time"
                name="flight_time"
                placeholder="5"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="from_place"
              >
                Qayerdan *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="from_place"
                name="from_place"
                placeholder="Tashkent"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="from_time"
              >
                Jo'nash vaqti *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="time"
                id="from_time"
                name="from_time"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="to_place"
              >
                Qayerga *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="to_place"
                name="to_place"
                placeholder="Istanbul"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="to_time"
              >
                Qo'nish vaqti *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="time"
                id="to_time"
                name="to_time"
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="price"
              >
                Narxi *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="price"
                name="price"
                placeholder="$ 120"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="airways"
              >
                Aeroport *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="airways"
                name="airways"
                placeholder="Uzbekistan Airways"
              />
            </div>
            <div className="mt-7">
              <div className="flex justify-start space-x-2">
                <button
                  disabled={loading}
                  type="submit"
                  className="block w-full px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                >
                  {loading ? (
                    <span className="fa-solid fa-spinner fa-spin-pulse" />
                  ) : (
                    "Yuborish"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
