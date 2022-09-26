const Home = () => {
    const handleClick = (event)=>{
        console.log("clicked")
        console.log(event.target)
    }

    const handleClickAgain = (name, event)=>{
        console.log("hello " + name, event.target)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(event)=>{
                handleClickAgain("Bob",event)
            }}>Click me again</button>
        </div>
    );
}
 
export default Home ;