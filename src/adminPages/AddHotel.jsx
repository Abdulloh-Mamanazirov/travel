import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Hotels = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
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
      .post("/hotels", data)
      .catch((err) => toast.error(err?.response?.data))
      .finally(() => setLoading(false));

    if (res.status === 201) {
      toast.success(res?.data);
      navigate("/admin/hotels");
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl px-4 mx-auto ">
        <div className="p-6 rounded-md shadow-md border">
          <h2 className="mb-6 text-xl text-center font-medium leading-6">
            Mehmonxona qo'shish
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="container px-4 mx-auto"></div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="title"
              >
                Mehmonxona nomi *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="title"
                name="title"
                placeholder="Nomi"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="description"
              >
                Izoh *
              </label>
              <textarea
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                name="description"
                rows="5"
                placeholder="Biror nima yozing..."
              ></textarea>
            </div>
            <div className="mb-6 ">
              <label className="block mb-2 text-sm font-medium" htmlFor="image">
                Rasm *
              </label>
              <div className="py-2 shrink-0">
                {image && (
                  <img
                    className="object-cover w-full max-w-sm border border-gray-400"
                    src={image}
                    alt="tanlangan rasm"
                  />
                )}
              </div>
              <label className="block pt-2">
                <span className="sr-only">Choose image or gif</span>
                <input
                  required
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
                Yulduzlar soni *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="number"
                id="stars"
                name="stars"
                placeholder="5"
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
                Narxi / bir kecha *
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
                htmlFor="location"
              >
                Joylashuvi *
              </label>
              <input
                required
                className="text-black block w-full px-4 py-3 mb-2 text-sm placeholder-gray-400 bg-white border rounded"
                type="text"
                id="location"
                name="location"
                placeholder="Tashkent, Uzbekistan"
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
