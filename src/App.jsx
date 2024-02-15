import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

const INITIAL_VALUES = {
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10,
}

function App() {
  
  const [inputValues, setInputValues] = useState(INITIAL_VALUES);  // userInput State

  let isValidInput = true;

  if(inputValues.duration < 1){
    isValidInput = false;
  }

  function changeValueHandler(event){
      const fieldName = event.target.name; 
      const currentValue = event.target.value;
      setInputValues((prevValues)=>{
          return {
              ...prevValues,
              [fieldName] : Number(currentValue),
          }
      })

  }
  return (
    <>
    <Header/>
    <UserInput onChangeHandler={changeValueHandler} inputValues={inputValues}/>
    {(isValidInput) && <Results inputValues={inputValues} />}
    {(!isValidInput) && <p className="center">Please enter duration greater than zero.</p>}
    </>
  )
}

export default App;
