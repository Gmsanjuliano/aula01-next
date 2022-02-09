import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

interface Props {
  setFormCard: (value: boolean) => void;
}

const FormPage: React.FC<Props> = ({ setFormCard }) => {
  return (
    <div className="w-full h-full">
      <div
        onClick={() => setFormCard(false)}
        className="w-full flex items-center justify-end p-6 hover:text-blue-500 "
      >
        <AiOutlineCloseCircle
          className="hover:scale-110 duration-300"
          size={40}
        />
      </div>
      <div className="h-full w-full px-52 pb-32 ">
        <div className="flex flex-col bg-gray-600 rounded-xl  w-full h-full">
          <div className="flex w-full justify-center mt-4">
            <FaWpforms size={35} className="mr-4 text-gray-50" />
            <span className="text-5xl font-semibold text-gray-50">
              Formulário
            </span>
          </div>
          <div className="w-full h-full flex flex-col px-10 py-10">
            <div className="flex mb-10">
              <div className="flex flex-col mr-10">
                <span>Nome:</span>
                <input
                  placeholder="ex: (Maria)"
                  className="w-96 rounded-full h-12 border-2 border-blue-500 bg-transparent text-gray-50 px-4 py-2 outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <span>Telefone:</span>
                <input
                  placeholder="ex: (5544999999999)"
                  className="w-96 rounded-full h-12 border-2 border-blue-500 bg-transparent text-gray-50 px-4 py-2 outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className=" flex">
              <div className="flex flex-col mr-10">
                <span>E-mail:</span>
                <input
                  placeholder="ex: (AdrianEfabricioAmorEterno@gmai.com"
                  className="w-96 rounded-full h-12 border-2 border-blue-500 bg-transparent text-gray-50 px-4 py-2 outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col mr-10">
                <span>Endereço:</span>
                <input
                  placeholder="ex: (Rua das Peroba)"
                  className="w-96 rounded-full h-12 border-2 border-blue-500 bg-transparent text-gray-50 px-4 py-2 outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-col ">
                <span>CPF:</span>
                <input
                  placeholder="ex: (02645144621564)"
                  className="w-96 rounded-full h-12 border-2 border-blue-500 bg-transparent text-gray-50 px-4 py-2 outline-none"
                  type="text"
                />
              </div>
              <button className="w-96 h-12 bg-blue-500 rounded-full">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
