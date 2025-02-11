function EventBubbling(){
          
    const handleEvent=(event)=>{
          event.stopPropagation();
          console.log("child clicked")

    }

  return (
    <div onClick={()=>console.log("parent clicked")} style={{ padding: "20px", border: "2px solid black" }}> 

        <button onClick={handleEvent}> Click me</button>
        
    </div>
  )


}

export default EventBubbling;