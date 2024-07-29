import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  const people = [
    {
      id: 1,
      name: "Alice",
      age: 30,
      friends: [
        {
          id: 2,
          name: "Bob",
          age: 25,
          hobbies: [
            { id: 1, name: "Reading", difficulty: "Medium" },
            { id: 2, name: "Hiking", difficulty: "Hard" },
          ],
        },
        {
          id: 3,
          name: "Charlie",
          age: 35,
          hobbies: [
            { id: 3, name: "Gaming", difficulty: "Easy" },
            { id: 4, name: "Cooking", difficulty: "Medium" },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "David",
      age: 40,
      friends: [
        {
          id: 5,
          name: "Eve",
          age: 28,
          hobbies: [
            { id: 5, name: "Swimming", difficulty: "Hard" },
            { id: 6, name: "Cycling", difficulty: "Medium" },
          ],
        },
      ],
    },
  ];

  let num1 = 45;
  let num2 = 10;
  
  console.log("The addition between num1 and num2 is: ",(num1+num2))

  num1 = 1982;
  num2 = 46;

  console.log("The addition between num1 and num2 is: ",(num1+num2))

  num1 = 32988392;
  num2 = 36;

  console.log("The addition between num1 and num2 is: ",(num1+num2))

  function addition(numberA, numberB){

    try
    {
    let addNumbers = numberA+numberB;
    console.log("The addition between num1 and num2 is: ",addNumbers)
    return addNumbers;
    }
    catch(error)
    {
      console.log(error)
    }
    console.log("I am running because the program didnt crash")
  }

  function subtraction(numberA,numberB){
    return numberA-numberB;
  }

  //Below is a declaration/definition/creation of the nameOfFunction function
  function nameOfFunction(){
    let something = "blah blah blah"
    return something;
  }
  
  // below is the call/invocation for the nameOfFunction function
  nameOfFunction();

  num1 = 55;
  num1 = 89;

  addition(num1,num2);

  //localStorage.setItem('user', JSON.stringify(userObj))

  function multiplication(numberA,numberB,numberC){
    return numberA * numberB * numberC;
  }

  function Divvie(colour){

    return <div style={{backgroundColor:colour}}> Watta gwan?</div>
  }

  return (<>
  <h1>This is the sum of 2 numbers: {addition(num1,num2)}</h1>
  <h2>This is the output/return of a silly function: {nameOfFunction()}</h2>
  <p>This is the subtraction of 2 numbers: {subtraction(num1,num2)}</p>
  <p>This is the product of 3 numbers: {multiplication(5,6,3)}</p>
  {Divvie("lightgreen")}
  {Divvie("red")}
  {Divvie("orange")}

  </>);
}

export default App;
