import { GrAccessibility } from "react-icons/gr";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";


function Difficulty({level}){
 
    if(level == "Easy"){
       level =  <div style={{backgroundColor:"green"}}>
                 <GrAccessibility size={60} style={{color:"yellow"}} />
                 <h1 style={{color:"ywllow"}}>Easy</h1>
                </div>
    }
    else if( level == "Medium"){
        level = <div style={{backgroundColor:"orange"}}>
                <FaAccessibleIcon size={60} />
                <h1>Medium</h1>
                </div>
    }
    else if(level == "Hard"){
            
        level =  <div style={{backgroundColor:"red"}}>
                <FaAmbulance size={60} style={{color:"black"}} />
                <h1 style={{color:"black"}}>Hard!!!</h1>
                </div>
    }
    return(
        <>
        <div style={{justifyContent:"center",
                     alignItems:"center", 
                     textAlign:"center",
                     marginTop:"-20px",
                     height:"30px"}}>
                     {level}
        </div>
        </>
    )
}
export default Difficulty;