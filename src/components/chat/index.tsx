import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  setChatCard: (value: boolean) => void;
}

const ChatPage: React.FC<Props> = ({ setChatCard }) => {
  return (
    <div className="w-full h-full">
      <div
        onClick={() => {
          setChatCard(false);
        }}
        className="w-full flex items-center justify-end p-6 hover:text-blue-500 "
      >
        <AiOutlineCloseCircle
          className="hover:scale-110 duration-300"
          size={40}
        />
      </div>
    </div>
  );
};

export default ChatPage;
