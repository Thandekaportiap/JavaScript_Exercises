import { PiPencilSimpleLineFill } from "react-icons/pi";
import { PiMediumLogoFill } from "react-icons/pi";
import { GiDiamondHard } from "react-icons/gi";
function Difficulty(){
    let level = 5;
    if(level =5 ){
        return (
<div style={{
        backgroundColor:"green"
    }} >
      <PiPencilSimpleLineFill size={30} /> <h1>easy</h1> 
</div>
        )  
    }
    else{
        return(
            <div
               style={{
                backgroundColor:"red"
               }}
               >
                <GiDiamondHard size={30} /> <h1>hard </h1>
                </div>  
        )
    }
// return(
//     <>
    
//     <div
//     style={{
//       backgroundColor:"orange"  
//     }}
//     >
        
//         <PiMediumLogoFill  size={30}/> <h1>medium</h1>
    
//     </div> 

//    <div
//    style={{
//     backgroundColor:"red"
//    }}
//    >
//     <GiDiamondHard size={30} /> <h1>hard </h1>
//     </div>   
    
//    </> 
// )

}
export default Difficulty;