function EventDelegation(){

    const eventHadle=(event)=>{

         console.log(`Clicked: ${event.target.innerText}`)
    }

    return (

        <div>
          <ul onClick={eventHadle}style={{ cursor: "pointer" }}>

             <li>item1</li>
             <li>item2</li>
             
          </ul>

       </div>
    )
}

export default EventDelegation;