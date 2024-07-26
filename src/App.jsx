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

      <p>{localStorage.getItem("name")}</p>
      <p>{localStorage.getItem("Name")}</p>
      <p>{localStorage.getItem("David")}</p>


        {/* <p value={Surname}
            onChange={(e) => setSurname(e.target.value)}></p>

         <input
            placeholder="Surname"
            value={name}
            onChange={(e) => setSurname(e.target.value)}/>

        <div>
            <button onClick={handle}>Done</button>
         </div>

         {localStorage.getItem('Surname') && (
            <div>
               Surname: <p>{localStorage.getItem('Surname')}</p>
            </div>
         )} */}
    </>

  )
}

export default App
