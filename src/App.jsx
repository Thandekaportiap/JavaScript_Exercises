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

// Subtraction
  let sub = subtraction(num1, num2)
  function subtraction(num1, num2){

    return(
      num2 - num1
    )
  };


  // Addition
  function addition (num1, num2){
    
    return(
      num1 + num2
    )
  };
  addition(num1, num2);


  // Multiplication
  function multiplication (num1, num2){
    num1 = 10;
    num2 = 2; 

    return(
      10 * 2
    )
  };


  // Division
  function division (num1, num2){
    
    return(
      num1 / num2
    )
  };

  function bgroungColour(colour,text){
    return(
      <p style={{backgroundColor:colour, color:text}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla urna, aliquam tristique gravida quis, suscipit a est. Praesent imperdiet lacus arcu, in rhoncus arcu pretium vel. Maecenas luctus, ex a dapibus commodo, nulla enim pellentesque urna, et ultricies ex purus ut massa. Phasellus vitae urna sit amet felis tempus mollis. Nam et porttitor enim. Cras gravida, nulla et rutrum lobortis, ligula nisi faucibus massa, sed tempus turpis erat nec mauris. Donec hendrerit, dui at dapibus interdum, urna quam iaculis diam, in semper enim elit a augue. Fusce a nulla eu augue gravida bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultrices purus a dignissim rhoncus. Nullam semper orci et orci pellentesque tincidunt. Sed quis gravida neque.</p>
    )
  }

  let number = 10;

  if(number != !5){
    alert ("The name of my variable is number and I assigned it = " + number)
  }

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
      <h1>This is a multiplication of two numbers: {multiplication()}</h1>
      <h1>This is a quotient of two numbers: {division(100,20)}</h1>
      {bgroungColour("grey", "white")}
      {bgroungColour("violet", "nayve")}
      {bgroungColour("yellow", "purple")}
    </>

  )
}

export default App
