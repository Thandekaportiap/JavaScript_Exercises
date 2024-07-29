function Thirditem(){
    let snake = { name:"Vipper",
        type:"non-venomerousSnake",
        color:"green",
        eyes:"two",
        legs:"none",
        Weight:"10-85kg",
        age:1,
        itKills:!false,
        foodType:["rats","chicks","insects","cats"]
      };
    return (
        <>
         <div style={{backgroundColor:"black", borderRadius:"10px",display:"flex"}}>
            <p style={{color:"white",width:"80px"}}>
                {snake.foodType[2]}
            </p>
        </div>
        </>
    )
}export default Thirditem;