// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Cnt(){

    
const Counter = () => {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };

    return Counter();
    
      
}

export default Cnt;