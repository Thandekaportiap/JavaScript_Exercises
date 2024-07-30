import { ImHappy2 } from "react-icons/im";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { ImAngry2 } from "react-icons/im";


function Robot({level = "hard"}){

    if(level == "easy"){
        level = <div style={{backgroundColor:"green",
        color:"white"}}><h1><ImHappy2 size={50} style={{verticalAlign:"middle",marginBottom:10}}/>Easy</h1>
        </div>
      }else if(level == "medium"){
        level = <div style={{backgroundColor:"orange"}}>
        <h1><BsFillEmojiNeutralFill size={50} style={{verticalAlign:"middle",marginBottom:10}}/>Medium</h1>
        </div>
      }else{
        level = <div style={{backgroundColor:"red", color:"white"}}>
        <h1><ImAngry2 size={50} style={{verticalAlign:"middle",marginBottom:10}}/>Hard</h1>
        </div>
      }

    return(
        <>
        <div>{level}</div>
        </>
    )
}
export default Robot