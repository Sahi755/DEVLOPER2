import Profile from "./componet/Profile";
import Userprofile from "./componet/Userprofile";
import Greet from "./componet/Greet";
import Itemsadd from "./componet/Itemsadd";
import Resti from "./componet/Resti";
import Button from "./componet/Button"
import File from "./componet/File";
import Circle from "./componet/Circle";
import UserProfile2 from "./componet/UserProfile2";
import Useeffect from "./componet/Useeffect";
import ArrayFilter from "./componet/ArrayFilter";
import Button1 from "./componet/Button1";
import EventDelegation from "./componet/EventDelegation";
import EventBubbling from "./componet/EventBubbling";
import Handle from "./componet/Handle";
import ButtonName from "./componet/ButtonName";
import FormSubmit from "./componet/FormSubmit";
import InputChange from "./componet/InputChange";
import KeyboardEvents from "./componet/KeyboardEvents";
import DeleteArr from "./componet/DeleteArr";
import DefaultAction from "./componet/DefaultAction";

function Call(){

    
           <h2>destructuring</h2>
           <h3><Profiles firstname={"Sahil"} lastname={"Bhosale"} age={23} post={"software engineer"}/></h3>
           <h3><Profile name={"sahil"} age={34} post={"software engineer"}/></h3>
           <h5>hello</h5>
           <h2>Using Spread Operator in State Update</h2>
           <Userprofile></Userprofile>
           <h2>greet</h2>
           <Greet></Greet>
           <h2>Using the Spread Operator with Arrays</h2>
           <Itemsadd></Itemsadd>
           <h2>reduse function</h2>
           <h5><Resti></Resti></h5>
           <h2> Using Rest Operator in Component Props</h2>
           <Button onClick={()=>alert("fUCK Life")}>Fuck you</Button>
           <h2>Create a separate file (Dashboard.js) for the component:</h2>
           <File></File>
           <h2> Importing Default and Named Exports Together</h2>
      
           <Circle radius={6}></Circle>
           <h2>16. Passing an Object as Props Using the Spread Operator</h2>
           <UserProfile2 {...user2}/>
           <h2>17. Destructuring Function Parameters in an Event Handler</h2>
           <button onClick={handleClick}>Click me</button>
           <h2> Using Spread Operator in useEffect Dependency Array</h2>
           <Useeffect></Useeffect>
           <h2>19. Filtering an Array Using Spread Operator in State Update</h2>
           <ArrayFilter></ArrayFilter>
           <h1>DOM</h1>
        
           <h2>1. Handling Click Events in React </h2>
          <Button1></Button1>
           <h2>2. Implementing Event Delegation in React</h2>
          <EventDelegation></EventDelegation>
          <h2>5. Prevent Event Bubbling in React</h2>
          <EventBubbling></EventBubbling>
          <h2>6. Handling Synthetic Events in React</h2>
          <Handle></Handle>
          <h2>7. Passing Arguments to Event Handlers in React</h2>
          <h2>ssing Arguments to Event Handlers in React</h2>
          <h2><ButtonName name={"sahil"} id={23} post={"software Enginer"}></ButtonName></h2>
          <h2>11. Handling Form Submit Event in React</h2>
          <FormSubmit></FormSubmit>
          <h2>12. Handling Input Change Event in React</h2>
          <InputChange></InputChange>
          <h2>Handling Keyboard Events in React</h2>
          <KeyboardEvents></KeyboardEvents>
          <h2>15. Event Delegation for Removing List Items in React</h2>
          <DeleteArr></DeleteArr>
          <h2>16. Prevent Default Action in an Anchor Tag</h2>
          <DefaultAction></DefaultAction>
          <h2>18. Handling Focus & Blur Events in React</h2>
          </div>

}

export default Call;