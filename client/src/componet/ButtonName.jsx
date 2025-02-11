// eslint-disable-next-line react/prop-types
function ButtonName({name,id,post}){

     console.log(`name:${name} id: ${id},post:${post}`);

   return (

    <div>
          <button onClick={()=>ButtonName({name,id,post})}> print data emplyee Ok</button>

    </div>
    
   )
}

export default ButtonName