import React from "react";
import { clients } from "../Data";
import styles from "../Styles";
import Image from "next/image";
const Client = () => (
  <div className=" flex justify-center flex-wrap">
    {clients.map((client) => (
      <div className="flex justify-center items-center flex-wrap flex-1 sm:min-w-[194px] min-w-[150px] hover:bg-slate-500 rounded-3xl">
        <Image src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain my-5 "/>
      </div>
    ))}
  </div>
);

export default Client;
