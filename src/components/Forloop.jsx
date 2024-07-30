function Forloop({num}){
   
   for (let i = 0; i < num; i++){
 console.log( "The number is ",i)
     }
   
 return(<>
 <h1>This is the prop value of Forloop componet:</h1>
 <span>
    {num}
 </span>

 </>
 )
   


}
export default Forloop;