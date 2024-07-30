import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import { GiDiamondHard } from "react-icons/gi";
import { MdOutlineSpeed } from "react-icons/md";

const difficulty = ({level}) => {
    console.log (level)

    // let level = "easy";
        let background;
        let icon;
        let color;

const item = () =>{
    if(level == "easy"){
        background="green";
        color = "white";
            icon = <BiCheckDouble size={45}/>
    } else if (level === "medium"){
       background= "orange"
       icon = <MdOutlineSpeed size={45}/>
    }
    else {
       background="#FF2400"
       icon = <GiDiamondHard size={45}/>
    }
    return item
}
{item(level)}

    return(
        <>
        <div style={{background, color}}>
        <h1>{level}</h1>
        {icon}
        </div>

        </>
    )
}
export default difficulty