import { useState } from "react";
import Person from "./components/Person";



const App = () => {


  // const theTextState = useState('');
  // const theText = theTextState[0];
  // const setTheText = theTextState[1];

  const [theText, setTheText] = useState('')
  const [firstName, setFirstName] = useState('');

  const clickHandler = () => {
    setTheText('it changed!');
  }

  const theTextHandler = (e) => {
    setTheText(e.target.value);
  }

  const initialValue = !theText && !firstName;


  return <div>

    <label htmlFor="the-text">Text</label>
    <input type="text" id="the-text" className="text-class" value={theText} onChange={theTextHandler} />
    <label htmlFor="first-name">First Name</label>
    <input type="text" id="first-name" value={firstName} onChange={e=>setFirstName(e.target.value)} />

    { !!initialValue && <p>TYPE TO GET STARTED</p> }
    {!initialValue && theText === firstName && <p style={{color:'green'}}>MATCH</p>}
    {!initialValue && theText !== firstName && <p style={{color:'red'}}>NO MATCH</p>}



    {/* <p>What is in the input is {theText}</p>
    <p>{theText} is in the input!!</p>

    <button onClick={clickHandler}>Click me!</button>

    <p>Hello World</p>
    <p>Another Hello World</p>
    <Person firstName="Mat" lastName="Gargano" middleName="Gregory" />
    <Person firstName="Jeff" lastName="McNeil" />
    <Person firstName="Mike" />
    <Person />
    <Person />
    <Person /> */}
    
    </div>;
}

export default App;