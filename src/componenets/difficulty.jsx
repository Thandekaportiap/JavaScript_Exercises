import { FaRegCheckSquare } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Difficulty = ({level}) => {
    let backgroundColor;
    let icon;
    let text;

    if(level === "easy"){
        backgroundColor ="green";
        icon = <FaRegCheckSquare />;
        text = "Easy";
    }

    else if(level === "medium"){
        backgroundColor = "orange";
        icon = <IoWarningOutline />;
        text = "Medium";
    }

    else if(level === "hard"){
        backgroundColor = "red";
        icon = <RxCross2 />;
        text = "Hard";
    }

    return(
        <div style={{ backgroundColor, padding: '10px', borderRadius: '5px', color: 'white', display: 'flex', alignItems: 'center' }}>
            <div style={{marginRight:"10px"}}>{icon}</div>
            <div>{text}</div>
        </div>
    )
}
export default Difficulty