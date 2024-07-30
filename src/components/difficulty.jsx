import { PiPencilSimpleLineFill } from "react-icons/pi";
import { PiMediumLogoFill } from "react-icons/pi";
import { GiDiamondHard } from "react-icons/gi";
const Difficulty = ({level}) => {
    console.log(level)
  let backgroundColor;
  let icon;
    if (level ==='easy') {
        
                    backgroundColor ='green'
                    icon =  <PiPencilSimpleLineFill size={50} />
         
    }
           else if(level ==='medium'){
                
                  backgroundColor = 'orange ' 
                  icon =<PiMediumLogoFill  size={50}/>
                    
               
           }
                else{
                  
                        backgroundColor = 'red '
                         icon =<GiDiamondHard size={50} /> 
                    
                }
                return(
                    <div style={{backgroundColor,padding:'10px',color:'white'}}>
                     {level.charAt(0).toUpperCase()+ level.slice(1)}
                     {icon}
                    </div>
                )

            }         


export default Difficulty;