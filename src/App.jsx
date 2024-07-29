import React from 'react'
import Practice from './components/practice';
import Difficulty from './components/difficulty';

function APP(){

 



let num1 =10;
let num2 =12;

function addition(num1, num2){
  return num1 + num2 ;
}
console.log(addition(num1,num2))




  function subtraction(num1, num2) {
   return num2 - num1
  }

  console.log (subtraction(num1, num2))
  
 function multiplication(num1,num2){
  return num1*num2
 }




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

console.log(people[1])
console.log(people[1].name)
console.log(people[1].friends[0].hobbies[1].difficulty)

  let practice = 9

  practice= 1

  let name ="Asanda";

  let y =false
  let x =true

  let lion = {legs:4, isAggressive:true, color:"brown", trait:["big","playful","aggressive","roar"]};

  let fruits = ["Banana",  "Apples",  "Mango" , "Grapes", "Pineapple"];

  fruits.push("strawberry")
  fruits.push("oranges")


  function para(bc,purple){
    return <p style={{backgroundColor:bc,color:purple}}>Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillu
      m dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  }



  function myNameis(){
    let name = "Asanda"
    return name
  }
  myNameis();



  let isAge = 20;
  
  if(isAge == 5){

    alert("The value of Age is "+ isAge)
  }
  else{
    alert("The condition was not meant")
  }




  return(
    <>

<Difficulty/>

<h1>Hi my name is :{myNameis()}</h1>
<h2>This is the difference between two numbers :{subtraction(num1, num2)}</h2>
<p>This is the product of two numbers :{multiplication(num1, num2)}</p>
<p>This is the sum of two numbers :{addition(num1, num2)}</p>
{para("yellow","purple")}
{para("red")}




    {fruits.map((fruit, index)=>(
      <Practice name={fruit} key ={index}/>
    ))}
    
    <Practice  name ={"fruits"}/>

    <div>

    <p> {lion.trait[2]} </p>

    </div>
<div className='out'>
    {people[1].friends[0].hobbies[1].difficulty}
    </div>

    </>
  )
  
}



  export default APP
    

