// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Cnt(){

   
const Counter = () => {
      const [count, setCount] = useState(0);
      
      const styleObject = {
        color: "blue",
        fontSize: "20px",
        backgroundColor: "yellow",
      };
      
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)} style={styleObject}>Increment</button>
        </div>
      )
    };

    return Counter();
    
      
}

export default Cnt;