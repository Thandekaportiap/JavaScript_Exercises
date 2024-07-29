import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

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
            { id: 2, name: "Hiking", difficulty: "Hard" },
          ],
        },
        {
          id: 3,
          name: "Charlie",
          age: 35,
          hobbies: [
            { id: 3, name: "Gaming", difficulty: "Easy" },
            { id: 4, name: "Cooking", difficulty: "Medium" },
          ],
        },
      ],
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
            { id: 6, name: "Cycling", difficulty: "Medium" },
          ],
        },
      ],
    },
  ];

  klet 

  localStorage.setItem('user', JSON.stringify(userObj))

  return <></>;
}

export default App;
