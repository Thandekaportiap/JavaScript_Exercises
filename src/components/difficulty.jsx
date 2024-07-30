import { SiEasyeda } from "react-icons/si";
import { PiHourglassSimpleMediumBold } from "react-icons/pi"
import { SiOpensourcehardware } from "react-icons/si";

function Difficulty({level}){
    //  console.log(level)  
    let backgroundColor;
    let icon;
    let text;

     

        if(level=="easy"){
            level = <div style={{
                backgroundColor: "green",
                
                text:'easy'}}
                ><SiEasyeda />Easy</div>
            //  alert("This level is:"+ ""  + level)

      
        }

        else if(level== "medium"){
            level = <div style={{
                backgroundColor: "orange",
                
                text:'medium'}}
                > <PiHourglassSimpleMediumBold />Medium</div>
           
            // alert("This level is:" + "" + level)

        


        } else if(level=="hard"){
            level = <div style={{
                backgroundColor: "red",
                
                }}
                > <SiOpensourcehardware />Hard</div>
           
            
            // alert("This level is:"+ "" + level)
        }

    
        
        
;



    return(
        <>
        <div style={{
            backgroundColor,
            padding: "5px",
        }}>

           
            <h1>{level}</h1>
        
</div>
        </>
    )


}
export default Difficulty;