import React from 'react'
import Practice from './components/practice';

function APP(){
  
 function subtraction(){

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

  return(
    <>
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
    

