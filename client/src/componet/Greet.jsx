function Greet(){

   const name="Sahil"
   let age=34;
   var city="ratnagiri"

   const print=()=>{

       return `name:${name} Age:${age} city:${city}`
   }

   return print();
   
}

export default Greet;