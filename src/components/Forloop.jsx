function Forloop({num}){
  
const book = {
  about:"cooking",color:"black",length:"1.4",pages:"105",author:"sanele",title:"cooking rep"
}
for(let x in book){
    console.log(book[x])
}


   for (let i = 0; i < num; i++){
 console.log( "The number is ",i)
     }
    
 return(<>
 <h1>This is the prop value of Forloop componet:</h1>
 <span>
    {num}
{
   
}
 </span>

 </>
 )
   


}
export default Forloop;