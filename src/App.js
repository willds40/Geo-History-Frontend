import React, {useState} from 'react';
import './App.css';

function App() {

  const handleClick = () =>{
   //fetch data from backend 
   console.log("here")
    updateText("User Info")
  }

  const [text, updateText] = useState("")

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
      <div data-testid="user-info">{text}</div>
    </div>
  );
}

export default App;
