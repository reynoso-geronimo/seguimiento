import { useEffect } from "react";

const TicketInfo = ({ ticket }) => {
  useEffect(() => {
    console.log(ticket);
  }, [ticket]);
 if (ticket!=undefined) {
  return (
    <div > 
 <h5 >
   id ticket: {ticket.id}
 
 </h5>
 <h5> servicios solicitiado: {new Date(ticket.createdAt).toLocaleDateString('es-AR')}</h5>
 
     </div>
   );
 }else{
  return (
    <div>cargando</div>
  )
 }
};

export default TicketInfo;
