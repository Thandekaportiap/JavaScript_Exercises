import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Div from './componenets/div'
import Div2 from './componenets/div2'
import { FaRegCheckSquare } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Difficulty from './componenets/difficulty'
import ForLoop from './componenets/forloop'

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

  function paragraph(yellow, purple){
    return<p style={{backgroundColor:yellow, color:purple, padding:"2cm"}}>As of my last update in July 2024, Heihachi Mishima’s status in the Tekken series is complex and can vary depending on the game's storyline and updates.

    Heihachi Mishima, a central character in the Tekken series, is known for his intense rivalry with his son, Kazuya Mishima, and his role in the overarching Mishima family saga. His fate has been a subject of significant plot twists throughout the series. In "Tekken 7," Heihachi is depicted as being killed by Kazuya during the climax of the game. The dramatic end scene involves Kazuya throwing Heihachi into a pit of lava, signifying his apparent death.
    
    However, the Tekken series is known for its dramatic storytelling, where characters often have complex fates. While Heihachi's death in "Tekken 7" is portrayed as final within that game's narrative, the nature of video game storytelling, particularly in long-running series like Tekken, means that characters sometimes return or have their fates revisited in future installments.
    
    If you're interested in the most current developments, checking the latest updates or announcements from Bandai Namco Entertainment regarding future Tekken games would provide the most accurate information.
    
    
    
    </p>


  }

  let wack = 10

  if(wack == 5){
    alert("This variable is wack.The variable has the value" + wack)
  }
  else{
    alert("The condition for the if was not met.")
  }

  

  return (
    <>
    <div style={{display:"flex"}}>
      {fruits.map((items, index) => (
        <Div name={items} key={index}/>
      ) )}
    </div>
      

      <div>
        <p>{honeyBadger.fear[2]}</p>
      </div>

     
      <div id='div2'>
        <h1>{people[1].friends[0].hobbies[1].difficulty}</h1>
      </div>

      <h1>Saved attribute is:</h1>

  
      <h1 id=''>{localStorage.getItem("fear")}</h1>
      
      
     <h1>The difference of two numbers is:{subtraction(num1, num2)}</h1>
    <h2>The product of three numbers is:{multiply(num5, num6, num7)} </h2>
     <p>The sum of two numbers is: {addition(num3, num4)}</p>
     {paragraph("yellow", "purple")}
     {paragraph("grey", "blue")}


  <Difficulty level={"easy"}/>
  <Difficulty level={"medium"}/>
  <Difficulty level={"hard"}/>

  <ForLoop num={2}/>

    </>
  
  );
}

export default App
