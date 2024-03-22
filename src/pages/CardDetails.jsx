import React from "react";

import { BiArrowBack, BiShare} from "react-icons/bi";
import image from "../assets/images/flashcards.png";

import {
  AiOutlineDownload,
  AiFillPrinter,
} from "react-icons/ai";


import Button from "../components/Button";
import ShareCard from "../components/ShareCard"

const CardDetails = () => {
  
  return (
    <div className="flex flex-col text-slate-600 p-2 pt-4">
      <section className="py-2">
        <div className="flex text-2xl">
          <div className="p-2">
            <BiArrowBack className=" cursor-pointer transition-colors duration-300 hover:font-bold hover:text-red-600" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">Groupname</h2>
            <p className=" text-gray-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              quisquam aperiam quae voluptatibus labore quod expedita obcaecati
              quidem dolores. Ullam.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Illum quisquam aperiam quae voluptatibus labore
              quod expedita obcaecati quidem dolores. Ullam.
            </p>
          </div>
        </div>
      </section>

      <main className="flex justify-between gap-4 flex-col sm:flex-col md:flex-row">
        <aside className="flex flex-col bg-white rounded-lg p-4 md:w-1/5">
          <h2 className="text-xl font-semibold border-b-2">Flashcards</h2>
          <ul className="text-lg">
            <li className="py-1 transition-colors duration-300 hover:text-red-600 hover:font-bold">list2</li>
            <li className="py-1 transition-colors duration-300 hover:text-red-600 hover:font-bold">list3</li>
            <li className="py-1 transition-colors duration-300 hover:text-red-600 hover:font-bold">list1</li>
            <li className="py-1 transition-colors duration-300 hover:text-red-600 hover:font-bold">list2</li>
            <li className="py-1 transition-colors duration-300 hover:text-red-600 hover:font-bold">list2</li>
            <li className="py-1 transition-colors duration-300 hover:text-red-600 hover:font-bold">list3</li>
          </ul>
        </aside>
        <section
          id="cardImage"
          className="flex flex-col  align-start  xl:flex-row p-8  sm:w-full bg-white shadow-lg rounded-lg "
        >
          <img src={image} alt="no imag" className="object-cover" />
          <p className="w-full text-lg pl-4 lg:h-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            repellat provident in accusantium officia aliquid iste quidem eius
            harum tempore? Est repellat at nesciunt, excepturi voluptates
            reiciendis maxime dignissimos, a nostrum molestias corporis animi!
            Officiis aperiam, quibusdam quam sequi quas sunt officia dicta eius
            iste alias saepe deleniti quisquam, veniam atque! Eligendi rem
            cupiditate eum illum itaque, expedita quia. Culpa.
          </p>
        </section>

        <aside className="flex flex-col justify-start align-center item-center md:w-1/5 gap-2">
          <Button icon={<BiShare />} text={"Share"} />
          <Button icon={<AiOutlineDownload />} text={"Download"} />
          <Button icon={<AiFillPrinter />} text={"Print"} />
        </aside>
      </main>
      <ShareCard className="" />
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <ShareCard className="" />
      </div>
  */}

      
    </div>
  );
};

export default CardDetails;
