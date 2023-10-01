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
 <h5> servicios solicitiado: {ticket.createdAt.toLocaleDateString('ar-AR')}</h5>
 
     </div>
   );
 }else{
  return (
    <div>cargando</div>
  )
 }
};

export default TicketInfo;
