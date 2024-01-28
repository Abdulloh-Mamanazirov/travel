import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FlightCard } from "../components";

const Hotels = () => {
  const modal = useRef();
  const [modalData, setModalData] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      let res = await axios("/flights");
      setData(res?.data);
    } catch (error) {
      toast.error(error?.res?.data || "Nimadadir xatolik ketdi!");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleEdit(e) {
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
      .put(`/flights/${modalData?.id}`, data)
      .catch((err) => toast.error(err?.response?.data))
      .finally(() => setLoading(false));

    if (res.status === 200) {
      getData();
      modal.current.close();
      setModalData(null);
      toast.success(res?.data);
    }
  }

  async function handleDelete(id) {
    let res = await axios
      .delete(`/flights/${id}`)
      .catch((err) =>
        toast.error(err?.response?.data || "Nimadadir xatolik ketdi!")
      );

    if (res.status === 200) {
      getData();
      toast.info(res?.data);
    }
  }

  return (
    <div>
      {data?.length === 0 && (
        <div className="text-center mt-10">
          <span className="fa-solid fa-box-open text-5xl text-gray-400" />
          <h3 className="text-3xl text-gray-700">Ma'lumot mavjud emas</h3>
        </div>
      )}
      <div className="grid mx-auto mt-20 mb-10 md:grid-cols-2 gap-5 w-11/12 md:w-10/12">
        {data?.map?.((item) => (
          <FlightCard
            key={item?.id}
            airways={item?.airways}
            date={item?.date}
            from={item?.from_place}
            from_time={item?.from_time}
            to={item?.to_place}
            to_time={item?.to_time}
            kg={item?.flight_time}
            klas={item?.class}
            price={item?.price}
            component={
              <div className="absolute -top-8 left-3">
                <ul className="bg-white border rounded-t-md flex gap-2 items-center">
                  <li className="text-blue-500 hover:bg-gray-100 px-3 py-1">
                    <button
                      onClick={() => {
                        modal.current.showModal();
                        setModalData(item);
                      }}
                    >
                      <span className="fa-solid fa-edit" />
                    </button>
                  </li>
                  <li className="text-red-500 hover:bg-gray-100 px-3 py-1">
                    <button onClick={() => handleDelete(item?.id)}>
                      <span className="fa-solid fa-trash" />
                    </button>
                  </li>
                </ul>
              </div>
            }
          />
        ))}
      </div>

      {/* edit modal */}
      <dialog
        ref={modal}
        className="w-11/12 md:w-3/5 border border-slate-200 rounded-lg backdrop:bg-black backdrop:bg-opacity-40"
      >
        <header className="sticky top-0 bg-white z-50 w-full flex items-center justify-between pb-1 p-2 border-b border-gray-500">
          <h3 className="text-2xl font-semibold">Tahrirlash</h3>
          <div
            role={"button"}
            onClick={() => {
              setModalData(null);
              modal.current.close();
            }}
            className="w-7 px-1 rounded-full bg-slate-500 inline-grid place-items-center"
          >
            <span className="fa-solid fa-close text-xl text-white" />
          </div>
        </header>
        <div className="mt-2 p-5">
          <form onSubmit={handleEdit}>
            <div className="container px-4 mx-auto"></div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium " htmlFor="date">
                Sanasi *
              </label>
              <input
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="date"
                id="date"
                name="date"
                defaultValue={modalData?.date?.slice?.(0, 10)}
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
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                name="class"
                defaultValue={modalData?.class}
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
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="number"
                id="flight_time"
                name="flight_time"
                placeholder="5"
                defaultValue={modalData?.flight_time}
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
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="from_place"
                name="from_place"
                placeholder="Tashkent"
                defaultValue={modalData?.from_place}
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
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="time"
                id="from_time"
                name="from_time"
                defaultValue={modalData?.from_time}
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
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="to_place"
                name="to_place"
                placeholder="Istanbul"
                defaultValue={modalData?.to_place}
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
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="time"
                id="to_time"
                name="to_time"
                defaultValue={modalData?.to_time}
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
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="price"
                name="price"
                placeholder="$ 120"
                defaultValue={modalData?.price}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="airways"
              >
                Aeroport (Airways company) *
              </label>
              <input
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="airways"
                name="airways"
                placeholder="Uzbekistan Airways"
                defaultValue={modalData?.airways}
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
      </dialog>

      {/* create page link button */}
      <Link
        to={"/admin/flights/add"}
        className="w-32 fixed bottom-10 right-10 text-left flex gap-2 items-center justify-around bg-gradient-to-br from-blue-600 to-sky-500 p-2 text-white rounded-lg shadow-lg transition-all hover:scale-105"
      >
        <span className="fa-solid fa-plus text-2xl" />
        <p>
          Parvoz <br /> qo'shish
        </p>
      </Link>
    </div>
  );
};

export default Hotels;
