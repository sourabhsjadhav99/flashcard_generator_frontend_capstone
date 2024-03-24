

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BiArrowBack, BiShare } from "react-icons/bi";
import {
  AiOutlineDownload,
  AiFillPrinter,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ShareCard from "../components/ShareCard";
import image from "../assets/images/flashcards.png";

const CardDetails = () => {
  const { id } = useParams();
  const groups = useSelector((state) => state.cards.groups);
  const group = groups ? groups.find((item) => item.id === id) : null;
  const [selectedCard, setSelectedCard] = useState(null);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the currently displayed card
  const navigate = useNavigate();

  useEffect(() => {
    if (group && group.cards.length > 0) {
      setSelectedCard(group.cards[currentIndex]); // Set the current card based on the currentIndex
    }
  }, [group, currentIndex]);

  if (!group) {
    return <div>Error: Group not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleDownload = () => {
    if (selectedCard) {
      // Create an anchor element to trigger the download
      const anchor = document.createElement("a");
      anchor.href = selectedCard.image; // Assuming 'image' is the URL of the image to download
      anchor.download = `${selectedCard.name}.jpg`; // Set the download filename
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  };

  const handlePrint = () => {
    window.print(); // Open the print dialog
  };

  const handleShareClick = () => {
    setShowSharePopup(!showSharePopup);
  };

  const handlePreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); // Decrease the currentIndex to navigate to the previous card
    }
  };

  const handleNextCard = () => {
    if (currentIndex < group.cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Increase the currentIndex to navigate to the next card
    }
  };

  return (
    <div className="flex flex-col text-slate-600 p-2 pt-4">
      <section className="py-2">
        <div className="flex text-2xl">
          <div className="p-2" onClick={handleGoBack}>
            <BiArrowBack className="cursor-pointer transition-colors duration-300 hover:font-bold hover:text-red-600" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">{group.groupName}</h2>
            <p className="text-gray-500 text-lg">{group.groupDescription}</p>
          </div>
        </div>
      </section>

      <main
        className="flex justify-between gap-4 flex-col sm:flex-col md:flex-row"
        id="cardImage"
      >
        <aside className="flex flex-col bg-white rounded-lg p-4 md:w-1/5">
          <h2 className="text-xl font-semibold border-b-2">Flashcards</h2>
          <ul className="text-lg">
            {group.cards.length > 0 ? (
              group.cards.map((card, index) => (
                <li
                  key={card.id}
                  className={`py-1 transition-colors duration-300 hover:font-bold ${
                    currentIndex === index ? "text-red-600 font-bold" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)} // Set the currentIndex when a card is clicked
                >
                  {card.name}
                </li>
              ))
            ) : (
              <li className="py-1 text-red-600 font-bold">No Cards</li>
            )}
          </ul>
        </aside>
        <section
          id="cardImage"
          className="flex flex-col align-start lg:flex-row p-3 md:p-6  md:w-full bg-white shadow-lg rounded-lg  gap-4"
        >
          <div className="w-full lg:w-1/2 flex justify-center items-center p-2">
            <img
              src={image}
              alt="no imag"
              className="object-cover max-h-[310px] w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 p-2 ">
            <p className="w-full text-lg pl-4 lg:h-1/2 ">
              {selectedCard ? selectedCard.description : ""}
            </p>
          </div>
        </section>

        <aside className="flex flex-col justify-between md:w-1/5">
          <div className="flex flex-col justify-start align-center item-center md:w-full gap-2">
            <Button
              icon={<BiShare />}
              text={"Share"}
              onClick={handleShareClick}
            />
            <Button
              icon={<AiOutlineDownload />}
              text={"Download"}
              onClick={handleDownload}
            />
            <Button
              icon={<AiFillPrinter />}
              text={"Print"}
              onClick={handlePrint}
            />
          </div>
          <div className="text-xl flex gap-4 m-2">
            <button onClick={handlePreviousCard}>
              <AiOutlineDoubleLeft />
            </button>
            <span>{`${currentIndex + 1}/${group.cards.length}`}</span>
            <button onClick={handleNextCard}>
              <AiOutlineDoubleRight />
            </button>
          </div>
        </aside>
      </main>
      {showSharePopup && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ShareCard className="" setShowSharePopup={setShowSharePopup} />
        </div>
      )}
    </div>
  );
};

export default CardDetails;
