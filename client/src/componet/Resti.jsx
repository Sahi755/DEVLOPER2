// eslint-disable-next-line no-unused-vars
import React from "react";
function Resti(){

    const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);

    const Calsisum=()=>{

        const result=sum(1,2,3,4,5)

        return `sum natural number:${result}`
    }

    return Calsisum();
    
}


export default Resti;