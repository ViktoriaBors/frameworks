import {useState} from "react"
const Home = () => {
   // let name = "mario"
   const [name, setName] = useState("mario") //initial value
   const [age, setAge] = useState(30)
    const handleClick = (event)=>{
    /*
        name = "Not mario"
        console.log(name)
        */
       setName("Not mario") // giving new value
       setAge(35)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home ;