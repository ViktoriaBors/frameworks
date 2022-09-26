import './App.css';

function App() {
  const title = "Welcome to the new blog"
  const likes = 50
  const array = ["alma", "baba", "cica"]
  //const person = {name:"Me", Age:34}
  const link = "http://google.com"
  return (
    <div className="App">
     <div className="content">
      <h1>{title}</h1>
      <p>liked {likes} times</p>
      <p>Its an array in react: {array} </p>
     {/* <p>Its an object {person}</p>*/}
     <p>{Math.random()}</p>

     <a href={link}>Google</a>
     </div>
    </div>
  );
}

export default App;
