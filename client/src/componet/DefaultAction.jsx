function DefaultAction(){

    const handle=(event)=>{

        event.preventDefault()
        console.log("Link click prevented!");

    }
     return (

         <div>
             <a href="https://google.com " onClick={handle}>Click Me</a>
         </div>
     )
}
export default DefaultAction;