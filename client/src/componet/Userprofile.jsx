// eslint-disable-next-line no-unused-vars
import React, {useState} from "react"
function Userprofile(){
 
     const [user,Update]=useState({name:"sahil",age:24});

     const updateAge=()=>{

        Update({...user,age:40})
     }

     return (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <button onClick={updateAge}>Update Age</button>
        </div>
     )
      
}

export default Userprofile;