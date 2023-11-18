const index = () => {
  return (
    <footer className="w-4/5 m-auto py-10 cursor-default">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-3xl font-bold cursor-pointer">Qatar</h1>
          <div className="flex space-x-5">
            <span className="fa-solid fa-brands fa-facebook text-xl cursor-pointer" />
            <span className="fa-solid fa-brands fa-instagram text-xl cursor-pointer" />
            <span className="fa-solid fa-brands fa-twitter text-xl cursor-pointer" />
            <span className="fa-solid fa-brands fa-whatsapp text-xl cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="fa-solid fa-phone" />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="fa-solid fa-message" />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="fa-solid fa-location-dot" />
            <p>(898)-645-434</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Travel</h1>
          <a className="text-xs text-gray-400" href="/">
            About Us
          </a>
          <a className="text-xs text-gray-400" href="/">
            Services
          </a>
          <a className="text-xs text-gray-400" href="/">
            Blog
          </a>
          <a className="text-xs text-gray-400" href="/">
            Contact Us
          </a>
          <a className="text-xs text-gray-400" href="/">
            About Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default index
