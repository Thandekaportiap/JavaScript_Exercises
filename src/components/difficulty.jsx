import React from 'react'


function Difficulty(){
let level = "easy";
  
if (level != 'easy') {
    alert("THIS IS NO EASY"); 

  } else if (level === 'medium') {
    backgroundColor = 'yellow';  

  } else if (level === 'hard') {
    backgroundColor = 'red';

  } else {
    backgroundColor = 'white';
  }
  }
export default Difficulty