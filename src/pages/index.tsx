import type { NextPage } from "next";
import { useState } from "react";
import ChatPage from "../components/chat";
import Chat from "../components/chat";
import FormPage from "../components/form";
import SideBar from "../components/side-bar";

const Home: NextPage = () => {
  const [formCard, setFormCard] = useState(false);
  const [chatCard, setChatCard] = useState(false);
  return (
    <div className="w-screen flex flex-1 h-screen overflow-hidden bg-gray-700 text-gray-50">
      <div className="flex flex-col">
        <SideBar setChatCard={setChatCard} setFormCard={setFormCard} />
      </div>
      <div className="flex flex-1 w-full h-full">
        {formCard && <FormPage setFormCard={setFormCard} />}
        {chatCard && <ChatPage setChatCard={setChatCard} />}
      </div>
    </div>
  );
};

export default Home;
