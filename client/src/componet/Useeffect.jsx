// eslint-disable-next-line no-unused-vars
import React ,{ useState, useEffect } from "react";

function  Useeffect(){

    const [item,setItem]=useState(["item1","item2"])

    useEffect(()=>{

        console.log("item updated");

    },[item])

     const additem=()=>{

          setItem([...item,`items ${item.length+1 }` ] );
     }

    
     return (
          <div>

              <button onClick={additem}>item add</button>
            
              <ul>

                {item.map((item,index)=>(

                    <li key={index}>{item}</li>
                ))}
                 
            

              </ul>
          </div>

     );

}

export default Useeffect;