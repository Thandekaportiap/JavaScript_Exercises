import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Div from './componenets/div'
import Div2 from './componenets/div2'

function App() {
  let example = 9

  example = 1

  let address = "128 Globe Road"

  let honeyBadger = {
    eyes:"two",
    legs:4,
    crazy:true,
    fear:["none", "zero", "nada", "what is fear?"],

  };

  let fruits = ["apple", "mango", "banana", "watermelon", "pineapple"]

  fruits.push("guava")

  fruits.push("lime")

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
            { id: 2, name: "Hiking", difficulty: "Hard" }
          ]
        },
        {
          id: 3,
          name: "Charlie",
          age: 35,
          hobbies: [
            { id: 3, name: "Gaming", difficulty: "Easy" },
            { id: 4, name: "Cooking", difficulty: "Medium" }
          ]
        }
      ]
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
            { id: 6, name: "Cycling", difficulty: "Medium" }
          ]
        }
      ]
    }
  ];

  // set Item
  localStorage.setItem("fear", "what is fear?")

  // Retrieve
 
  function subtraction(num1, num2){
  
    return(
      num1 - num2
    )
    
  }

  let num1 = 23
  let num2 = 19

  subtraction(num1,num2);

  function addition(num3, num4){
    return(
      num3 + num4
    )
  }

  let num3 = 234
  let num4 = 67

  function multiply(num5, num6, num7){
    return num5 * num6 * num7
  }

  let num5 = 12
  let num6 = 200
  let num7 = 2

  return (
    <>
      {/* {fruits.map((items, index) => (
        <Div name={items} key={index} />
      ) )}

      <div>
        <p>{honeyBadger.fear[2]}</p>
      </div>

     
      <div id='div2'>
        <h1>{people[1].friends[0].hobbies[1].difficulty}</h1>
      </div>

      <h1>Saved attribute is:</h1>

  
      <h1 id=''>{localStorage.getItem("fear")}</h1> */}
      
      
     <h1>The difference of two numbers is:{subtraction(num1, num2)}</h1>
    <h2>The product of three numbers is:{multiply(num5, num6, num7)} </h2>
     <p>The sum of two numbers is: {addition(num3, num4)}</p>
    </>
  
  );
}

export default App
