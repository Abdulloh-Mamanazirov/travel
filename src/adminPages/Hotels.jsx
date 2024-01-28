import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HotelCard } from "../components";
import { IMAGE_URL } from "../constants";

const Hotels = () => {
  const modal = useRef();
  const [modalData, setModalData] = useState("");
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      let res = await axios("/hotels");
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
    const { title, description, image, features, price, location, stars } =
      e.target;
    const data = new FormData();
    data.append("title", title.value);
    data.append("description", description.value);
    data.append("features", features.value);
    data.append("price", price.value);
    data.append("location", location.value);
    data.append("stars", stars.value);
    data.append("image", image.files[0]);

    let res = await axios
      .put(`/hotels/${modalData?.id}`, data)
      .catch((err) =>
        toast.error(err?.response?.data || "Nimadadir xatolik ketdi!")
      )
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
      .delete(`/hotels/${id}`)
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
      <div className="grid mx-auto my-10 md:grid-cols-2 gap-5 w-11/12 md:w-10/12">
        {data?.map?.((item) => (
          <HotelCard
            key={item?.id}
            image={IMAGE_URL + item?.image}
            title={item?.title}
            desc={item?.description}
            location={item?.location}
            price={item?.price}
            stars={item?.stars}
            features={JSON.parse(item?.features)}
            component={
              <details className="absolute top-3 left-3">
                <summary className="bg-white rounded-lg pl-2" />
                <ul className="bg-white p-1 rounded-md">
                  <li className="mb-2 text-blue-500 hover:bg-gray-100 p-1">
                    <button
                      onClick={() => {
                        modal.current.showModal();
                        setModalData(item);
                      }}
                    >
                      <span className="fa-solid fa-edit mr-2" />
                      Tahrirlash
                    </button>
                  </li>
                  <li className="text-red-500 hover:bg-gray-100 p-1">
                    <button onClick={() => handleDelete(item?.id)}>
                      <span className="fa-solid fa-trash mr-2" />
                      O'chirish
                    </button>
                  </li>
                </ul>
              </details>
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
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="title"
              >
                Mehmonxona nomi
              </label>
              <input
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="title"
                name="title"
                placeholder="Nomi"
                defaultValue={modalData?.title}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="description"
              >
                Izoh
              </label>
              <textarea
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                name="description"
                rows="5"
                placeholder="Biror nima yozing..."
                defaultValue={modalData?.description}
              ></textarea>
            </div>
            <div className="mb-6 ">
              <label className="block mb-2 text-sm font-medium" htmlFor="image">
                Rasm
              </label>
              <div className="py-2 shrink-0">
                {image ? (
                  <img
                    className="object-cover w-full max-w-sm border border-gray-400"
                    src={image}
                    alt="tanlangan rasm"
                  />
                ) : (
                  <img
                    className="object-cover w-full max-w-sm border border-gray-400"
                    src={IMAGE_URL + modalData?.image}
                    alt="tanlangan rasm"
                  />
                )}
              </div>
              <label className="block pt-2">
                <span className="sr-only">Choose image or gif</span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </label>
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="stars"
              >
                Yulduzlar soni
              </label>
              <input
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="number"
                id="stars"
                name="stars"
                placeholder="5"
                defaultValue={modalData?.stars}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="features"
              >
                Qulayliklari
              </label>
              <input
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="features"
                name="features"
                placeholder="Bepul nonushta, transport xizmati..."
                defaultValue={
                  modalData?.features && JSON.parse(modalData?.features)
                }
              />
              <p className="text-[12px] text-gray-400">
                Har bir qulaylikni vergul ( , ) bilan ajrating
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="price"
              >
                Narxi / bir kecha
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
                htmlFor="location"
              >
                Joylashuvi
              </label>
              <input
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="location"
                name="location"
                placeholder="Tashkent, Uzbekistan"
                defaultValue={modalData?.location}
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
        to={"/admin/hotels/add"}
        className="fixed bottom-10 right-10 text-left flex gap-2 items-center bg-gradient-to-br from-blue-600 to-sky-500 p-2 text-white rounded-lg shadow-lg transition-all hover:scale-105"
      >
        <span className="fa-solid fa-plus text-2xl" />
        <p>
          Mehmonxona <br /> qo'shish
        </p>
      </Link>
    </div>
  );
};

export default Hotels;
