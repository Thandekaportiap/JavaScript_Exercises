function ForLoop({num})
{
    for(let i= -5; i > num, i++;){
        console.log("This is iteration number",i);
    }
    return(<>
    <span>This is the prop value of componenet "ForLoop" {num}</span>
    </>)
}
export default ForLoop