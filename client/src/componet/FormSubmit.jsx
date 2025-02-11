function FormSubmit(){

     const SubmitForm=(Event)=>{

        Event.preventDefault();  
        console.log("Form Submitted!")
     }

     return(

         <div>
                <form onClick={SubmitForm}><button type="submit">Submit form</button></form>
                
         </div>
     )

}

export default FormSubmit;