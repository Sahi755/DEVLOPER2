import { useState } from "react";

function DeleteArr(){
  
    const [item,setitem]=useState(["sahil","Kunal","riddhi","kiran"]);

 const items=(event)=>{

      setitem(item.filter((item)=>item!==event.target.innerText))

 }


  return (

     <div>
     
          <ul onClick={items}>
              
              {item.map((item)=><li key={item}>{item}</li>)}

          </ul>
     </div>
  )

}

export default DeleteArr

