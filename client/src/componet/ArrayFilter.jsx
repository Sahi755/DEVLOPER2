import { useState } from "react"

const ArrayFilter=()=>{

    const [item,setitem]=useState([1,2,3,4,5]);

    const removes=()=>{
    
         setitem(item.filter(item=>item!==3));
    }
    
    return (

        <div>
             <p>{item}</p>
           
            <button onClick={removes}>item remove</button>
        </div>
    )
       
}

export default ArrayFilter