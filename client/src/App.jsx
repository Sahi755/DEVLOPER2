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
import Circles from "./componet/Circle";
function App() {

  const Profiles=({firstname,lastname,age,post})=>{

    return `first name:${firstname} lastname:${lastname} age:${age} post:${post} `
}
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
       <Circles></Circles>

      </div>
     
    </>
  )
}

export default App
