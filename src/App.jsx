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

  num1 = 55;
  num1 = 89;

  addition(num1,num2);

  //localStorage.setItem('user', JSON.stringify(userObj))

  return (<>
  <h1>{addition(num1,num2)}</h1>
  </>);
}

export default App;
