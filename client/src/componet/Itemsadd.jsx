// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
function Itemsadd(){

  const [item,additem]= useState([1,2,3]);

  const additems=()=>{

       additem([...item,4,5,6]);
  }

  return(
     <div>
         <p>{item}</p>
         <button onClick={additems}>additem</button>
    </div>
  );

}

export default Itemsadd;