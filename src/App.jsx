import Div from './componets/divColor';
import './App.css'
import David from './david';

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
                console.log(fruitNames)


              // objects inside arrays and arrays inside of objects
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
        <div style={{backgroundColor:"black", borderRadius:"10px",display:"flex"}}>
          <p style={{color:"white",width:"80px"}}>
            {snake.foodType[2]}
          </p>
        </div>
         {/* <Div fruits={fruitNames}/> */}

        {/* <div>
        <David friends={people}/>
        </div> */}


        {/* Accessing David friends second hobbie */}
       <div style={{backgroundColor:"orange",color:"blue", borderRadius:"10px"}}>
           {people[1].friends[0].hobbies[1].difficulty}
       </div>
      
    </>
  )
}

export default App
