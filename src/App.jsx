import { useState } from 'react'
import Background from './components/bgcolor';


function App() {
  let num = 7;
      num = 1;

  let news = "success";
   
  let isBroke = true;

  let dog = {
    name: "snoopy",
    height: 2.5,
    isMale: true,
    puppynames: ["pookie","red", "bobbie","ted"]

  };


  let fruits = ["orange", "strawberry", "mango", "banana", "peach"]
   fruits.push("strawberry")

  const fruit = "orange";

const people = [

  //ALICE//
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


//CHARLIE//
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

//DAVID//
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

// {people[2[3[3[1[2]]]]]};

console.log(people);
console.log(people[1]);
console.log(people[1].name);
console.log(people[1].friends[0]);
console.log(people[1].friends[0].hobbies[1].difficulty)


let num1 = 70;
let num2 = 30;

function Subtraction(num1,num2){
  

  let subNumbers = num1-num2;
      
  console.log("The value is decreasing:",subNumbers)
  return subNumbers
}

Subtraction(num1,num2)


;


function Addition(num1,num2){

  let Addnumbers = num1 + num2
  console.log('The value has been added:', Addnumbers)
  return Addnumbers
}

Addition(num1,num2);

function multiplication(num1,num2,num3){
  return num1 * num2 * num3;
}
multiplication()
;
  return (
    <>
    {/* <div style={{
      display: "flex",
    }}>
      {fruits.map((fruit,index) =>(

     <Background fruit={fruit} key={index}></Background>
))} 
</div>
<div>
  <p>{dog.puppynames[2]}</p>
</div>

<div style={{}}>
<p>
{people[1].friends[0].hobbies[1].difficulty}


</p>
</div> */}

<h1>This is the diffrence of 2 numbers: {Subtraction(num1,num2)}</h1>
<p>This is the sum of 2 numbers: {Addition(num1,num2)}</p>
<p>This is the product of 3 numbers: { multiplication(6,6,4)}</p>
    </>
   
  )
}

export default App
