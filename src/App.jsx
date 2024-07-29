import React from "react";
import NewComp from "./component/newComp"

const App = ()  => {

  let age = 7;
  age = 1;

  let studentName = "Nomfundo";
  let isStudent = true;

  let animal = {
    name: "cat",
    legs: 4,
    eyes: "blue",
    isCute: true,
    favorateFood: ["milk", "meat", "cupCakes", "pap"]
  }

  let fruits = ["kiwi", "apple", "banana", "grapes", "orange"]
  fruits.push("lemon")
  fruits.push("pear")
 
  localStorage.setItem("fruits", JSON.stringify(fruits[2]))
  const localData = localStorage.getItem("fruits");


  console.log("this is from my localStorage "+ localData)
  

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
  
  const subtractin = (num1, num2) => {
let difference = num2 - num1;
return difference;
  }

  

  return(
    <>

<div className="map">
{fruits.map((fruit, index) => (
  <NewComp fruit={fruit} key={index}  />
))}
  </div>
  <div>
    <p>{animal.favorateFood[2]}</p>
  </div>
  <div style={{background:"orange"}}>
    <p>{people[1].friends[0].hobbies[1].difficulty}</p>
  </div>
   <div>
    <p> {localData}</p>
   </div>
   <div>
    <h1>{subtractin(8, 10)}</h1>
   </div>
    </>
  )
}

export default App