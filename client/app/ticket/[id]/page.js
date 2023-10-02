"use client";
import { useState, useEffect } from "react";

const Ticket = props => {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const getTicket = async () => {
      try {
        const consultaTickets = await fetch(
          `http://localhost:3001/api/tickets/${props.params.id}`
        );
        const resultado = await consultaTickets.json();

        setTicket(resultado);
      } catch (error) { }
    };

    getTicket();
  }, []);
  return (
    <div className="w-full font-medium">

      <div className="w-1/2 m-auto mt-20 border-2 p-2">
        <div className="flex flex-row justify-around"><h1>Ticket Numero: {ticket.id}</h1> <h1>Servicio Numero: {ticket.numero_servicio}</h1></div>
        <div className="">Fecha servicio: {ticket.fecha_servicio ? ticket.fecha_servicio : "Sin Asignar"}</div>
        <div className="">Proveedor servicio: {ticket.proveedor_service ? ticket.proveedor_service : "Sin Asignar"}</div>
        <div className="">Presupuesto: {ticket.presupuesto ? "$"+ticket.presupuesto : "Sin Asignar"}</div>
        <div className="">Reparaciones: {ticket.reparaciones ? ticket.reparaciones : "Sin Asignar"}</div>
        <div className="">Proveedor servicio: {ticket.proveedor_service ? ticket.proveedor_service : "Sin Asignar"}</div>
        <div className="">Estado: {ticket.estado_ticket ? ticket.estado_ticket : "Sin Asignar"}</div>
        <div className="">Factura: {ticket.factura ? ticket.factura : "Sin Asignar"}</div>
        <div className="">Observaciones: {ticket.observaciones ? ticket.observaciones : "Sin Observaciones"}</div>
      </div>
    </div>
  );
};

export default Ticket;
