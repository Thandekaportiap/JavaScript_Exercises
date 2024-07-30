function ForLoop({num})
{   let book ={
    title: "Cherub: Class A",
    year: 2002,
    author:"Robert Muchamore",
    character:"James Adams",
    genre: "Action",
    publisher: "Penguin Books" 
}

    for(let x in book){
        console.log(book[x])
    }

    for(let i= -5; i > num, i++;){
        console.log("This is iteration number",i);
    }
    return(<>
    <span>This is the prop value of componenet "ForLo" {num}</span>
    </>)
}
export default ForLoop