import { useEffect } from "react";
import Link from "next/link";
const TicketInfo = ({ ticket }) => {
  useEffect(() => {
    
  }, [ticket]);
 if (ticket!=undefined) {
  return (
    <div > 
 <h5 >
   id ticket: {ticket.id}
 
 </h5>
 <h5> Servicios solicitiado: {new Date(ticket.createdAt).toLocaleDateString('es-AR')}</h5>
 <h5>Estado del servicio: {ticket.estado_ticket}</h5>
 <h5> Dominio del vehiculo: {ticket.Vehiculos.dominio}</h5>
 <button className="w-20 bg-white text-black border-4 border-blue-600">
  <Link href={`/ticket/${ticket.id}`}> Procesar servicio </Link>

 </button>
     </div>
   );
 }else{
  return (
    <div>cargando</div>
  )
 }
};

export default TicketInfo;
