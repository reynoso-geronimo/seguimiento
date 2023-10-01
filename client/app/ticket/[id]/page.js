'use client'
import { useState,useEffect } from "react";

const Ticket = (props) => {
const [ticket, setTicket] = useState({})
useEffect(() => {
const consultarTicket= async function(id){
  try {
    const consulta= await fetch(`http://localhost:3001/api/tickets/${id}`)
    const resultado=await consulta.json()
    setTicket(resultado)
  } catch (error) {
    console.log(error);
  }
  console.log(resultado);
  consultarTicket(props.params.id)
  
}
console.log(ticket);
  
}, [])


  return (
    <div>Ticket</div>
  )
}

export default Ticket