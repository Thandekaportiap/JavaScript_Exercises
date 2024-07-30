function ForLoop({num}){

    const book = { author:"N.J Sithole", tittle: "The dawn", releaseDate:"11 October 2021",numberOfpages:"1200", bookcolor:"black", editor:"Nokwanda Chonco"

    }

    for(let x)
    ;
    for(let x=0; x < num; x--){
        
        console.log("x is:",x )
    }
    
    return(
        <>
      <h1>This is the prop value of LoopFor Component</h1>  
      <span>
                {num}
      </span>
        </>
    )

}

export default ForLoop;