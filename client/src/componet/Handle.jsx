function Handle(){

    const handler=(event)=>{

            console.log("Event Type:", event.type);
            console.log("Event Target:", event.target);
            console.log("Current Target:", event.currentTarget);
            
    }

    return (

        <div>
            <button onClick={handler}>Ok</button>
        </div>
    )

}

export default Handle;