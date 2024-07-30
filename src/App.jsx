import React from "react";
import NewComp from "./component/newComp"
import Difficulty from "./component/difficulty"
import ForLoop from "./component/forLoop";

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
  
  const subtraction  = (num1, num2) => {
let difference = num2 - num1;
return difference;
  }

  const addition = (number, number1) => {
let sum = number1 + number;
return sum
  }

  const multiplication  = (num1, num2, num3) => {
 let product = num1 * num2 * num3;
 return product;
  }

  const text = (color, color1) => {
    return <p style={{backgroundColor: color, color:color1, padding:"2%"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Morbi ullamcorper semper tellus, nec suscipit mi imperdiet at. 
       Morbi sollicitudin orci quis cursus accumsan. Nam at urna mi. 
       Vivamus id lectus eget velit auctor luctus at in quam. Sed eget lectus ultrices, pretium tellus ut, imperdiet tortor. Aliquam elementum luctus posuere. Curabitur feugiat nisi nec nisi pellentesque vestibulum.
       Fusce ut diam at enim aliquam pellentesque.
    </p>
  }

  let sunnySide = 21;
  // if(sunnySide == 5){
  //   alert("The name of the variable is sunnySide and it has " + sunnySide +" inside")
  // }
  // else {
  //   alert("the condition for the if statement was not met")
  // }

  
  let level = "hard";

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
    <p>This is the difference of two numbers  {subtraction(8, 14)}</p>
    <p>This is the sum of two numbers {addition(8, 12)}</p>
    <p>This is the product of three numbers {multiplication(3, 6, 9)}</p>
    <div>{text("aqua")}</div>
    <div>{text("orange")}</div>
    <div>{text("violet")}</div>
    <div>{text("yellow", "purple")}</div>
   </div>
   <div>< Difficulty  level={level}/></div>
   <ForLoop age={6} />
    </>
  )
}

export default App