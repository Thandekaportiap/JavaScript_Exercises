import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/bgcolour'


function App() {
 
  let number = 9;
  number =4

  let hope = "fresh";

   //let isPaid = no
  
   
  

   let animal = {animaType:"Cat", color :"Grey and Black", age:2, eyeColor:"blue",isHungry: true, list:['Monday','Tuesday','Wednesday','Thursday','Friday']};
   
    let fruits = ['Banana', 'Apple', 'Pear','Orange', 'Nantchie']

    fruits.push('Pineapple', 'SweetBerry')
    
    console.log(animal.list[2]);
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
    
    
    
    
    
    
    
    
    
    
    

  return (
    
    
    <>
    {fruits.map((fruits,index) => (
      <List name={fruits} key={index}/>
    ))}
    <p>{animal.list[2]}</p>
    <div style={{backgroundColor:"orange"}}>
      <p>
        {people[1].friends[0].hobbies[1].difficulty}
      </p>
    </div>
    <p>{people}</p>

    </>
  )
}

export default App
