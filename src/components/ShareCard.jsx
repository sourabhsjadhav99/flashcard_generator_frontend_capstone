import React from "react";
import Facebook from "../assets/images/facebook-icon.svg";
import Linkedin from "../assets/images/linkedin-icon.svg";
import Whatsapp from "../assets/images/whatsapp-icon.svg";
import Twitter from "../assets/images/twitter-icon.svg";
import Mail from "../assets/images/mail-icon.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCopy, BiShareAlt } from "react-icons/bi";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function ShareCard() {
  return (
    <div className="flex flex-col gap-4 w-[450px] bg-white p-4 border border-2 shadow-lg rounded-lg ">
      <div className="flex justify-end">
        <AiFillCloseCircle className="text-xl cursor-pointer transition-colors duration-300 hover:font-bold hover:text-red-600"/>
      </div>
      <div>
        <h2 className="text-xl font-bold ">Share</h2>
      </div>
      <div className="flex justify-between">
        <div>
          <span>Link: </span>
          <span className="">url</span>
          <b className="">"Link copied to clipboard"</b>
        </div>
        <div className="flex gap-2 text-2xl" >
        <BiCopy className=" cursor-pointer transition-colors duration-300 hover:font-bold hover:text-blue-700" />
        <BiShareAlt className=" cursor-pointer transition-colors duration-300 hover:font-bold hover:text-orange-700" />
        </div>
      </div>
      <div className="flex justify-evenly">
        <FacebookShareButton url="https://www.facebook.com/">
          <img
            src={Facebook}
            alt="Facebook"
            className="w-10 h-10 p-2 m-2 bg-gray-200  cursor-pointer"
          />
        </FacebookShareButton>

        <LinkedinShareButton
          className="rounded-[50%]"
          url="https://www.linkedin.com/"
        >
          <img
            src={Linkedin}
            alt="Linkedin"
            className="w-10 h-10 p-2 m-2 bg-gray-200  cursor-pointer"
          />
        </LinkedinShareButton>

        <WhatsappShareButton
          className="rounded-[50%]"
          url="https://web.whatsapp.com/"
        >
          <img
            src={Whatsapp}
            alt="Whatsapp"
            className="w-10 h-10 p-2 m-2 bg-gray-200  cursor-pointer"
          />
        </WhatsappShareButton>

        <TwitterShareButton
          className="rounded-[50%]"
          url="https://twitter.com/"
        >
          <img
            src={Twitter}
            alt="Twitter"
            className="w-10 h-10 p-2 m-2 bg-gray-200  cursor-pointer"
          />
        </TwitterShareButton>

        <EmailShareButton className="rounded-[50%]" url="https://gmail.com/">
          <img
            src={Mail}
            alt="Mail"
            className="w-10 h-10 p-2 m-2 bg-gray-200  cursor-pointer"
          />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default ShareCard;
