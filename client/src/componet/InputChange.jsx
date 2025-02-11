import { useState } from "react";
function InputChange(){

    const [text,setText]=useState("")

    return (

        <div>
            
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <p> you typed..{text}</p>   

        </div>
    )
}

export default InputChange;