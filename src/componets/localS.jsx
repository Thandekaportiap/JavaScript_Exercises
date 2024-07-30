function LocalStrge(){
        return (
            <>
            <p style={{backgroundColor:"black",
                        alignItems:"center",
                        textAlign:"center",
                        justifyContent:"center",
                        color:"white"}}>
                Vipper is a {localStorage.getItem("snake")}
            </p>
            </>
        )
}export default LocalStrge;