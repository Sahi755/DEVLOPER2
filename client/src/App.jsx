/* eslint-disable no-unused-vars */

import Arrow from '../comp/Arrow'
import Arrow2 from '../comp/Arrow2'
import Greeet from '../comp/Greet'
import Myliteral from '../comp/Myliteral'
import Profile from '../comp/Profile'
import React, { useState } from "react";

import './App.css'
import Cnt from '../comp/Cnt'

function App() {

  const Profiles=({firstname,lastname,age,post})=>{

    return `first name:${firstname} lastname:${lastname} age:${age} post:${post} `
}

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
  
  return (

    <>
      <div>
      
       <h1><Greeet></Greeet></h1>
       <h2><Arrow></Arrow></h2>
       <h3><Arrow2></Arrow2></h3>
       <h3><Myliteral></Myliteral></h3>
       <h3><Profiles firstname={"Sahil"} lastname={"Bhosale"} age={23} post={"software engineer"}/></h3>
       <h3><Profile firstname={"Sahil"} lastname={"Bhosale"} age={23} post={"data science"}/></h3>
       <h3><Profile firstname={"kiran"} lastname={"sangare"} age={23} post={"c++ developer"}/></h3>
       <h3><Profile firstname={"simran"} lastname={"sangare"} age={24} post={"c++ developer"}/></h3>
       <Counter />
       <Cnt></Cnt>
    

      </div>
     
    </>
  )
}

export default App
