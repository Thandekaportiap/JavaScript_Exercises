import { SiEasyeda } from "react-icons/si";
import { PiHourglassSimpleMediumBold } from "react-icons/pi"
import { SiOpensourcehardware } from "react-icons/si";

function Difficulty(level){
           
    
            

        if(level=="easy"){
             alert("This level is:" + "" + level)

        }

        else{
            alert("If level is not met return:")

        }
    

        
;
    return(
        <>
        <div style={{ backgroundColor: "green"

        }}>

        <h1>
        <SiEasyeda />Easy</h1>
        
        
        </div>

        {/* <div style={{backgroundColor:"yellow"}}>
            <h1><PiHourglassSimpleMediumBold />
                Medium</h1>
        </div>

        <div style={{
            backgroundColor:"red"
        }}>

            <h1><SiOpensourcehardware />Hard</h1>


        </div> */}
        
        </>
    )


}
export default Difficulty;