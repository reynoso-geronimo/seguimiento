"use client";
import TicketInfo from "./components/TicketInfo";
import { useState, useEffect } from "react";

export default function Home() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const consultaTickets = await fetch(
          "http://localhost:3001/api/tickets"
        );
        const resultado = await consultaTickets.json();

        setTickets(resultado);
      } catch (error) {

      }
    };

    getTickets();
  }, []);
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-10 ">
      {tickets.map((ticket,i)=>{
        return <TicketInfo key={ticket+i}ticket={ticket}></TicketInfo>
      })}
    </main>
  );
}
