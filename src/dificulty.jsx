import { GrAccessibility } from "react-icons/gr";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";


function Difficulty({level}){
    let level = ["Easy","Medium","Hard"];
let easy =  <div style={{backgroundColor:"green"}}>
            <GrAccessibility size={40} style={{color:"red"}} />
            <h1 style={{color:"red"}}>{level[0]}</h1>
            </div>

let medium = <div style={{backgroundColor:"orange"}}>
                <FaAccessibleIcon size={40} />
                <h1>{level[1]}</h1>
                </div>

let hard =   <div style={{backgroundColor:"red"}}>
            <FaAmbulance size={40} style={{color:"green"}} />
            <h1 style={{color:"green"}}>{level[2]}!!!</h1>
            </div>

            
    if(level[0]){
            
    }
    else if(level[1]){

    }
    else if(level[2]){

    }
    return(
        <>
       
       

        

       
        </>
    )
}export default Difficulty;