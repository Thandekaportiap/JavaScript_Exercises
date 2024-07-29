function ArraysnObjects(){
      // objects inside arrays and arrays inside of objects
    const people = [
        {
          id: 1,
          name: "Alice",
          age: 30,
          friends: [
            {
              id: 2,
              name: "Bob",
              age: 25,
              hobbies: [
                { id: 1, name: "Reading", difficulty: "Medium" },
                { id: 2, name: "Hiking", difficulty: "Hard" }
              ]
            },
            {
              id: 3,
              name: "Charlie",
              age: 35,
              hobbies: [
                { id: 3, name: "Gaming", difficulty: "Easy" },
                { id: 4, name: "Cooking", difficulty: "Medium" }
              ]
            }
          ]
        },
  
        {
          id: 4,
          name: "David",
          age: 40,
          friends: [
            {
              id: 5,
              name: "Eve",
              age: 28,
              hobbies: [
                { id: 5, name: "Swimming", difficulty: "Hard" },
                { id: 6, name: "Cycling", difficulty: "Medium" }
              ]
            }
          ]
        }
      ];
        return (
            <>
                <div style={{backgroundColor:"orange",color:"blue", borderRadius:"10px"}}>
                     {people[1].friends[0].hobbies[1].difficulty}
                 </div>
            </>
        )
}export default ArraysnObjects