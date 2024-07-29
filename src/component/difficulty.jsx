import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import { GiDiamondHard } from "react-icons/gi";
import { AiFillCodeSandboxSquare } from "react-icons/ai";

const difficulty = ({level}) => {
    console.log(level )

const item = () =>{
    if(level === "easy"){
        easy = <div style={{background:"green"}}>
            <h3>easy</h3>
            <BiCheckDouble size={30}/>
        </div>
    } else if (level === "medium"){
       <div style={{background:"orange"}}>
        <h3>medium</h3>
        <AiFillCodeSandboxSquare size={30}/>
    </div>
    }
    else {
       <div style={{background:"red"}}>
        <h3>Hard</h3>
        <GiDiamondHard size={30}/>
    </div>
    }
}

    return(
        <>



        </>
    )
}
export default difficulty