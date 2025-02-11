function KeyboardEvents(){


  const test=(Event)=>{

    console.log(`even key:${Event.key}`);

  }
    return (

        <div>
            <input type="text" onKeyDown={test}></input>
        </div>
    )
    
}

export default KeyboardEvents;