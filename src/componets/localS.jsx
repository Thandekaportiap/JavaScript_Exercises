function LocalStrge(){
        return (
            <>
            <p style={{backgroundColor:"grey"}}>
                 {localStorage.getItem("snake")}
            </p>
            </>
        )
}export default LocalStrge;