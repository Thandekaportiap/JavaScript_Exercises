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
    
    
    let num1 = 50;
    let num2 = 19;
   function subration(num1,num2){
      let sum = num1 - num2
      console.log("the subration of num1 and num2",sum)
      return sum
    }
    subration(num1,num2)
    
    // let sum1 = 20;
    // let sum2 = 5;
    function addition(num1,num2){
      let add = num1 + num2
      console.log("adding sum1 and sum2" ,add)
      return add
    }
    
    let num3 =10
    function multiplication(num1, num2, num3){
      let mult = num1 * num2 * num3
      return mult
      console.log("multiplication of 3 product",mult)
    }
    multiplication()
    

  return (
    
    
    <>
    {/* {fruits.map((fruits,index) => (
      <List name={fruits} key={index}/>
    ))}
    <p>{animal.list[2]}</p>
    <div style={{backgroundColor:"orange"}}>
      <p>
        {people[1].friends[0].hobbies[1].difficulty}
      </p>
    </div>
    <p>{people}</p> */}
<h1>
  {subration(num1,num2)}
  </h1>
  <p>
    {addition(num1,num2)}
  </p>
  <p>
    {multiplication(num1,num2,num3)}
  </p>
    </>
  )
}

export default App
