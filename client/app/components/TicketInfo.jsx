import { useEffect } from "react"


const TicketInfo = ({ticket}) => {
    useEffect(() => {
     console.log(ticket)
    }, [ticket])
  return (
   <div>
   {Object.entries(ticket).map(([key,value])=><p>{key} {value}</p>)}
   </div>
  )
}

export default TicketInfo