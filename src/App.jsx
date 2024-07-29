import Div from './componets/divColor';
import './App.css'
import David from './david';
import { useEffect, useState } from 'react';
import LocalStrge from './componets/localS';
import ArraysnObjects from './array&Object';
import Thirditem from './thirdItem';

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
                fruitNames.push("Guava","Grappes")
                console.log(fruitNames);


            
 
                        {/* putting an object in the local storage  */}
              localStorage.setItem("snake", JSON.stringify(snake.type));


  return (
    <>
    
        
       
        {/* string data type */}
        <h1 >{gee} <br /></h1>

        {/*removing last item on the fruitNames List */}
        {/* {fruitNames.pop()} */}

          {/* mapping through the list of fruits */}
          {fruitNames.map((fruit, index) => (
           <Div fruits={fruit} key={index}/>))
          }

          {/* Accessing the 3rd item on the list of my animal foodtype */}
          <ArraysnObjects/>

         {/* <Div fruits={fruitNames}/> */}

        {/* <div>
        <David friends={people}/>
        </div> */}

        {/* Accessing David friends second hobbie */}
         <ArraysnObjects/>

          {/*pulling the object from the local storage and display it on the p-tag */}
          <LocalStrge  />
    </>
  )
}

export default App
