
let word = "";

function ForLoop({sum}){
    for(let i = 0; i < sum; i++){
        word += "This is the prop value of Component For Loop " + i + " "
        console.log("This is the prop value of Component For Loop " + i)
    }
    
    return (
        <>
        <span>{word}</span>
        </>
    )
}
export default ForLoop