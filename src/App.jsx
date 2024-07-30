import Div from './componets/divColor';
import './App.css'
import David from './david';
import { useEffect, useState } from 'react';
import LocalStrge from './componets/localS';
import ArraysnObjects from './array&Object';
import Thirditem from './thirdItem';
// import Minus from './funcMinus';
import Easy from './dificulty';
import Medium from './medium';
import Hard from './hard';
import Difficulty from './dificulty';



function App() {
              // number
  let pmbCode = 3201;
        pmbCode = 1;
        console.log(pmbCode);
              // String
  let gee = "Jack";
          console.log(gee);
              // boolean
  let ispayDay= true;
          console.log(ispayDay);

              // Objects
  let snake = { name:"Vipper",
                type:"non-venomerousSnake",
                color:"green",
                eyes:"two",
                legs:"none",
                Weight:"10-85kg",
                age:1,
                itKills:!false,
                foodType:["rats","chicks","insects","cats"]
              };
                console.log(snake);

              // List
  let fruitNames = ["Apple","Banana","Coconut","Orange","Mango"]
                fruitNames.push("Guava","Grapes")
                console.log(fruitNames);


            
 
                        {/* putting an object in the local storage  */}
              localStorage.setItem("snake", JSON.stringify(snake.type));

              let num1= 5;
               let num2= 10;
                  // let sum = num2- num1;

// parameters and arguements
function addition(num1, num2){
  return(num1 + num2)
}
addition(num1, num2)
function subtraction(){
  return(num2-num1)
}
subtraction(num1, num2)
function multiplication(num1, num2){
  return(num2*num1)
}
multiplication(num1, num2)

function Para(color,text,topp){
      return <div style={{backgroundColor:color,color:text,marginTop:topp}}> 
        <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Mauris venenatis nulla sit amet metus tristique tincidunt.
          Nullam fermentum, lectus non aliquet ornare, justo enim tempus arcu,
          faucibus semper risus mauris vitae est. Praesent aliquam consectetur enim,
          sed iaculis mi. Vivamus quis congue neque. Fusce venenatis iaculis eros. 
          Quisque ornare arcu ligula. Nulla eget nunc sed neque semper hendrerit. 
          Aenean non est turpis. Nullam pulvinar urna ut velit eleifend fermentum.
          Suspendisse eleifend gravida tempor.
        </p>
      </div> 
     
}


// let level = ["Easy","Medium","Hard"];


  return (
    <>
   <div>
                  {/* string data type */}
                <h1 >{gee} <br /></h1>

        {/*removing last item on the fruitNames List */}
        {/* {fruitNames.pop()} */}

          {/* mapping through the list of fruits */}
        <div style={{ display: 'flex', flexDirection: 'row',justifyContent:"space-between",marginTop:"-35px",height:"10%" }}>
        {fruitNames.map((fruit, index) => (
          <Div fruits={fruit} key={index}/>))
          }
        </div>

          {/* Accessing the 3rd item on the list of my animal foodtype */}
          <Thirditem/>

        {/* <Div fruits={fruitNames}/> */}

        {/* <div>
        <David friends={people}/>
        </div> */}

        {/* Accessing David friends second hobbie */}
        <ArraysnObjects/>

          {/*pulling the object from the local storage and display it on the p-tag */}
          <LocalStrge  />

          {/* <Minus/> */}
          {/* parameters and arguements */}
            <div style={{justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-30px"}}>
              <h1>This is  addition : {addition(num1, num2)}</h1>
              <h2 style={{marginTop:"-30px",marginBottom:"-20px"}}> This is the subtraction: {subtraction(num1, num2)}</h2>
              <h3> This is the product of 3 numbers : {multiplication(num1, num2,2)}</h3>
            </div>

        {/* reusing a div on a func n changing it background */}
        {Para("grey","white","-20px")}
        {Para("orange","black","-20px")}
        {Para("yellow","purple","-20px")}

        {/* changing divs when changing the levels */}
        <Difficulty level="Hard"/>

   </div>
    </>
  )
}

export default App
