import React from "react";

const index = () => {
  return (
    <div className="w-4/5 m-auto cursor-default my-10">
      <h1 className="text-4xl font-bold font-serif text-center">About</h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://commonslibrary.parliament.uk/content/uploads/2018/02/The_City_London-scaled.jpg"
            alt=""
          />
          <div>
            <h2 className="font-bold">Lorem, ipsum dolor.</h2>
            <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet.</h1>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in
            consectetur!
          </p>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-col space-y-4 text-left">
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold">Lorem ipsum dolor sit.</h2>
            <h1 className="font-bold text-2xl">Lorem ipsum dolor sitamet.</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              assumenda rem, autem accusamus magni nam culpa aut perspiciatis,
              totam beatae reiciendis repellendus eligendi.
            </p>
          </div>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://commonslibrary.parliament.uk/content/uploads/2018/02/The_City_London-scaled.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="https://commonslibrary.parliament.uk/content/uploads/2018/02/The_City_London-scaled.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
            View in map
          </h1>
        </div>
      </div>
    </div>
  );
};

export default index;
