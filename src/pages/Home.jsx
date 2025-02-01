import React, { useContext } from "react";
import "../App.css";
import { RiImageAiFill } from "react-icons/ri";
import { LuImagePlus } from "react-icons/lu";
import { MdChat } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoArrowUp } from "react-icons/io5";
import { UserContext } from "../context/UserContext";
import Chat from "./Chat";

function Home() {
  const { startRes, setStartRes, popUp, setPopUp } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStartRes(true);
  };

  const handlePopUp = () => {
    setPopUp((prev) => !prev);
  };
  return (
    <div className="home">
      <nav>
        <div className="logo">Smart AI Bot</div>
      </nav>
      {!startRes ? (
        <section className="hero">
          <span id="tag">What can I help with..?</span>
          <div className="cat">
            <div className="upImg">
              <RiImageAiFill />
              <span>Upload Image</span>
            </div>
            <div className="genImg">
              <LuImagePlus />
              <span>Generate Image</span>
            </div>
            <div className="chatImg">
              <MdChat />
              <span>Chat with AI</span>
            </div>
          </div>
        </section>
      ) : (
        <Chat />
      )}

      <section>
        <div className="input-box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="popUp">
              <div className="select-up">
                <RiImageAiFill />
                <span>Upload Image</span>
              </div>
              <div className="select-gen">
                <LuImagePlus />
                <span>Generate Image</span>
              </div>
            </div>
            <button id="add" onClick={handlePopUp}>
              <GoPlus />
            </button>
            <input type="text" placeholder="Enter a prompt..." />
            <button id="submit">
              <IoArrowUp />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
