import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { sendMessage } from "../../../../functions";

const index = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let { name, phone, message } = e.target;

    const response = await sendMessage(
      5017220821,
      `● Ism: ${name.value}                                                                                                                                                   ● Telefon: ${phone.value}                                                                                                                                                   ● Xabar: ${message.value} 
    `
    ).finally(() => setLoading(false));

    if (response.ok) {
      e.target.reset();
      toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
    } else {
      toast.error("Xabaringizni yuborishda xato!");
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5988.4864556469665!2d69.26883300000001!3d41.3688!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIyJzA3LjciTiA2OcKwMTYnMDcuOCJF!5e0!3m2!1sen!2s!4v1706353985862!5m2!1sen!2s"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-offset="340"
            data-aos-duration="700"
            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          >
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">
              {t("contact_title")}
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                <span className="text-red-500">*</span> {t("contact_name")}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                <span className="text-red-500">*</span> {t("contact_phone")}
              </label>
              <input
                required
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                {t("contact_message")}
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              disabled={loading}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              {loading ? (
                <span className="fa-solid fa-spinner fa-spin-pulse" />
              ) : (
                t("contact_send")
              )}
            </button>
            <p className="text-xs text-gray-500 mt-3">{t("contact_desc")}</p>
          </form>
        </div>
      </section>
    </>
  );
};

export default index;
