


function ForLoop({sum}){
    let word = "";

    let book = {
        author: "Precious",
        title: "Qondisile",
        Cover: "Hard",
        Pages: 2000,
        FoundOnline: true,
        Genre: "fiction",  
    }

    for(let p in book){
        console.log("This is the For in Loop with the book propety " + book[p])
    }

    for(let i = 0; i < sum; i++){
        word += "This is the prop value of Component For Loop " + i + " ";
        console.log("This is the prop value of Component For Loop " + i)
    }
    
    return (
        <>
        <span></span>
        </>
    )
}
export default ForLoop