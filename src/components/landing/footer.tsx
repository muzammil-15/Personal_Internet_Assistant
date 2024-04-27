import { Pi } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full z-50 bg-transparent paddingX">
      <div className="max-w-screen-xl py-5  mx-auto flex flex-col gap-6  border-t border-gray-600 border-opacity-30">
        <div className="flex justify-between items-center">

        <div className="font-bold text-[18px] flex  justify-start items-end gap-2">
          <span>
            <Pi className="mb-[5px]" size={20} color="#F56565" strokeWidth={3} />
          </span>
          <span className="text-white ">Assistant</span>
        </div>
        <div className="flex gap-3 items-center justify-center">
            <button className="text-[11px] font-thin text-gray-300  hover:underline">Privacy Policy</button>
            <button className="text-[11px] font-thin text-gray-300  hover:underline">Terms and Conditions</button>
        </div>
        </div>
      </div>
      <div className="text-center text-sm font-thin tracking-wide"><p>&copy; 2024 <span className="text-[#F56565] font-light">Personal Internet Assistant</span>. All rights reserved.</p></div>
    </div>
  );
};

export default Footer;
