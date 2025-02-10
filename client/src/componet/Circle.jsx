export  const Pi =3.14;
function Circle({radius}){

const Circles=()=>{

    const area=Pi*radius*radius;
    return <h3>Circle area:{area.toFixed(1)}</h3>;

}

   return Circles();

}
export default Circle