import React, {useState} from "react";
import './App.css';


const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Matt");

  const increment = () => {
    setCounter(counter + 1);
  };

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="App">
      <div>
        {counter}
      </div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <input placeholder="type something..." onChange={onChange}/>
      </div>
      <div>
        {inputValue}
      </div>

    </div>
  );
}

export default StateTutorial;
