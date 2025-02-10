/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import './App.css'
import Profile from "./componet/Profile";
import Userprofile from "./componet/Userprofile";
import Greet from "./componet/Greet";
import Itemsadd from "./componet/Itemsadd";
import Resti from "./componet/Resti";
import Button from "./componet/Button"
import File from "./componet/File";
import Circle from "./componet/Circle";
import UserProfile2 from "./componet/UserProfile2";
import Useeffect from "./componet/Useeffect";
import ArrayFilter from "./componet/ArrayFilter";



function App() {

  const Profiles=({firstname,lastname,age,post})=>{

    return `first name:${firstname} lastname:${lastname} age:${age} post:${post} `
}

  const user2={ name:"sahil",age:23,post:"Software Engineer" };

  const handleClick=({target})=>console.log(target.innerText);


  return (
    <>
      <div>
       
       <h2>destructuring</h2>
       <h3><Profiles firstname={"Sahil"} lastname={"Bhosale"} age={23} post={"software engineer"}/></h3>
       <h3><Profile name={"sahil"} age={34} post={"software engineer"}/></h3>
       <h5>hello</h5>
       <h2>Using Spread Operator in State Update</h2>
       <Userprofile></Userprofile>
       <h2>greet</h2>
       <Greet></Greet>
       <h2>Using the Spread Operator with Arrays</h2>
       <Itemsadd></Itemsadd>
       <h2>reduse function</h2>
       <h5><Resti></Resti></h5>
       <h2> Using Rest Operator in Component Props</h2>
       <Button onClick={()=>alert("fUCK Life")}>Fuck you</Button>
       <h2>Create a separate file (Dashboard.js) for the component:</h2>
       <File></File>
       <h2> Importing Default and Named Exports Together</h2>
  
       <Circle radius={6}></Circle>
       <h2>16. Passing an Object as Props Using the Spread Operator</h2>
       <UserProfile2 {...user2}/>
       <h2>17. Destructuring Function Parameters in an Event Handler</h2>
       <button onClick={handleClick}>Click me</button>
       <h2> Using Spread Operator in useEffect Dependency Array</h2>
       <Useeffect></Useeffect>
       <h2>19. Filtering an Array Using Spread Operator in State Update</h2>
       <ArrayFilter></ArrayFilter>

      </div>
     
    </>
  )
}

export default App
