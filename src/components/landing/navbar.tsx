import { Pi } from "lucide-react";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full z-50 fixed top-0 left-0  bg-transparent backdrop-blur-sm paddingX">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 border-b border-gray-600 border-opacity-20">
        <div className="font-bold text-[29px] flex  justify-start items-end gap-2">
          <span>
            <Pi className="mb-2" size={31} color="#F56565" strokeWidth={3} />
          </span>
          <span className=" ">Assistant</span>
        </div>
        <button className="border border-gray-500 border-opacity-50 py-2 px-6 rounded-full font-semibold tracking-wide hover:border-opacity-70 hover:text-gray-200">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
