/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import './App.css'


function App() {

  const Profiles=({firstname,lastname,age,post})=>{

    return `first name:${firstname} lastname:${lastname} age:${age} post:${post} `
}
  return (

    <>
      <div>
       
       <h3><Profiles firstname={"Sahil"} lastname={"Bhosale"} age={23} post={"software engineer"}/></h3>
    
       <h1>hello</h1>

      </div>
     
    </>
  )
}

export default App
