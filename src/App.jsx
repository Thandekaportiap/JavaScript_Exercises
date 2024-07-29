import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/list'


function App() {
 
  let number = 9;
  number =4

  let myName = "Luyanda";

   //let isPaid = no
  
   
  

   let animal = {animaType:"Cat", color :"Grey and Black", age:2, eyeColor:"blue",isHungry: true, list:['Monday','Tuesday','Wednesday','Thursday','Friday']};
   
    let fruits = ['Banana', 'Apple', 'Pear','Orange', 'Nantchie']
    localStorage.setItem("fruitsList",fruits[2])


    fruits.push('Pineapple', 'SweetBerry')
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
    
    function subraction(firstNumber,secondNumber){

      let SubtractNumbers = secondNumber - firstNumber;
      return(
        SubtractNumbers
      )}
      function nonNumericFunction(){
        let something = "bla dah whatever"
        return something
      }

      function addition(firstNumber,secondNumber){

        let addNumbers = secondNumber + firstNumber;
        return(
          addNumbers
        )}
        function multiplication(numOne,NumTwo,numThree){
        return numOne* NumTwo * numThree 
        }
        function lorumParagragh(color,color2,color3){
          return <div style={{background:color,color:color2,color3}}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget sodales metus. Suspendisse vitae sem in eros aliquet ullamcorper. Cras ante eros, maximus eu metus accumsan, faucibus tempor turpis. Mauris pellentesque nulla lorem, eu commodo mi aliquet vitae. Nullam eros quam, ultrices nec mollis id, faucibus in nisi. Nam interdum orci nibh, eget porta metus ornare eu. Integer in turpis et enim consequat dapibus. Etiam fermentum eros a mauris congue eleifend."</div>
        }

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
    <div>
      <p>
      {localStorage.getItem("fruitsList")}
      </p>
    </div>
    <h1>The difference between two numbers is:{(subraction(233, 17))}</h1>
    <h1>This is the output/return of  a non numeric fuctionis :{nonNumericFunction()}</h1>
    <p>The sum between two numbers is:{(addition(233,17))}</p>
    <p>The product of three numbers is: {multiplication(16,32,3)}</p>
    {lorumParagragh("red")}
    {lorumParagragh("yellow","purple")}
    {lorumParagragh("purple")}
    
    </>
  )
}




export default App


