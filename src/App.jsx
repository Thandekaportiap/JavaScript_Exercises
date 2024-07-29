import React, {useState} from 'react';
// import { useEffect } from 'react';
import './App.css'
import BackColour from './components/colour'

function App() {
  let num = 16;
  num = num +1;
  console.log(num);
  let gameName = "Umlabalaba";
  console.log(gameName)

  // boolean
  let beenArrested = false;
 
  // Object
  let cat = {
    colour: "Black",
    behavior: "Like an angel",
    Name: "Pharoah",
    age:2,
    favouriteToy: "Mouse",
    isFemale: true,
    favouriteFood: ["meat", "milk", "potatoes","catfood"],
  }

  // Arrays
  let fruit = ["Orange", "PineApple", "Banana", "Pear", "Apple"];
  fruit.push("mango");
  fruit.push("strawberry");

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

  localStorage.setItem("name", fruit[1]);
  localStorage.setItem("Name", cat.Name);
  localStorage.setItem("David", people[0].friends[0].hobbies[1].difficulty);

  let num1 = 20;
  let num2 = 30

  let sub = subtraction(num1, num2)

  function subtraction(num1, num2){

    return(
      num2 - num1
    )
  };

  function addition (num1, num2){
    
    return(
      num1 + num2
    )
  };
  addition(num1, num2)

  return (
    <> 
      
      {fruit.map((fruit, index) => (
        <BackColour id = {fruit} key = {index}/>
      ))}
  
      <div>
        <p>{cat.favouriteFood[2]}</p>
      </div>

      <div style={{backgroundColor:"orange"}}>
      <p>{people[1].friends[0].hobbies[1].difficulty}</p>
      </div>

      <p>Second element on the fruit list: {localStorage.getItem("name")}</p>
      <p>The name of the cat inside the object: {localStorage.getItem("Name")}</p>
      <p style={{backgroundColor:"red"}}>{localStorage.getItem("David")}</p>

      <h1>This is a difference of two numbers: {sub}</h1>
      <h1>This is a sum of two numbers: {addition(num1, num2)}</h1>
    </>

  )
}

export default App
