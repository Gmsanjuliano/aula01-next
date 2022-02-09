import React, { useState } from "react";
import FormPage from "../form";

interface Props {
  setFormCard: (value: boolean) => void;
  setChatCard: (value: boolean) => void;
}

const SideBar: React.FC<Props> = ({ setFormCard, setChatCard }) => {
  return (
    <div className="h-screen w-96 bg-gray-800">
      <div className="w-full bg-gray-600 h-24 flex items-center px-4">
        <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center">
          <span className=" text-gray-900 text-5xl font-semibold">P</span>
        </div>
        <span className="text-gray-900 font-semibold text-2xl ml-6">
          CABALO / Home Page
        </span>
      </div>
      <div className="w-full ">
        <ul className="px-4 py-2">
          <li
            onClick={() => {
              setFormCard(true);
            }}
            className="mt-10 w-full bg-transparent border-2 rounded-full border-blue-500 py-2 px-4 flex items-center justify-center hover:bg-blue-900 hover:scale-105 duration-300"
          >
            <span className="text-blue-500">Formulario</span>
          </li>
          <li
            onClick={() => {
              setChatCard(true);
            }}
            className="mt-10 w-full bg-transparent border-2 rounded-full border-blue-500 py-2 px-4 flex items-center justify-center hover:bg-blue-900 hover:scale-105 duration-300"
          >
            <span className="text-blue-500">Chat</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
