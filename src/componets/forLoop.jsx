function ForLoop({num}){

    for(let i= 0; i<= num; i++){
        console.log("this loop will iterate: "+ i + " times")
       
    }
    return (
        <>
        <span>This is the prop value:{num} for the forLoop component</span>
        </>
    )
    

}export default ForLoop