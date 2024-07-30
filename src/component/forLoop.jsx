import React from  "react"

const forLoop = ({age}) =>{

    for (let i = 0; i < age; i++){
        console.log("this is the value " + i)
    }

    return(
        <>
        <span>This is the prop value {age} of component forLoop</span>
        </>
    )
}

export default forLoop