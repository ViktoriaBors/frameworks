## Notes

1. Introduction 

What is React?
JS library/framework. Mainly for single page apps - index.html. New pages does not send to the server, everything changes in the browser. Fast websites.

Project - Blog CRUD app

Pro tip - Simple React Snippets, Emmet

2. Create app
- NODE install! 
- npx create-react-app project-name (create to the folder you want your app to be)
- cd project-folder
- npm run start - to start the project on localhost:3000 (default setting is port 3000 - can be changed)

What we have in the folder? Overview
- node-modules - project dependencies (like react) - huge size - no go on github (npm install - can be installed back again, take all the dependencies from package.json)
- public - public to the browser - index.html
One html file and react code is injected in the div id="root"
- src - here comes components

App.js
index.js - start the app (app.js - to root id in html)
react.strictMode - already checking for error and gives feedback in our console
package.json - dependencies

3. Components and Templates

Component: self-contained section of content (navbar,article, blog entry, sidebar, foot etc). Then they are rendered to the dom and showed on the page.
It is a function, where we return smth (html-like content), then we export this component so we can use it somewhere else.

Each components has its own template and logic. F.e navbar with a html template and a javascript logic (click on smth). Always with CAPITAL first letter, otherwise react thinks its a normal html tag (like a div)

App.js - root component

Looks html, but it is a JSX. Allows to make html like templates and in the background BABEL converts this jsx template to html, then that is rendered to the dom. JSX describes what the UI should look like (like a template language) but with JS features.

Adding classes - JSX uses className which is like a html class, but class is a reserved word in JS and we are still writing JS code actually.

Import React from "react" - in older version must be top of the file.

Export - always so it can be used in other files.

4. Dynamic values in templates

F.e blog title - could be hard-coded to the template in the return part.

BUT we can use variables (before return). To use the variables use {NAME of the variable} or valid javascript statement {10}

Variable can be anything - react gonna convert it to string and output as a string.
CANNOT output - Boolean and Objects

5. Multiple components - Component Tree

Root Component - App.js
Other components are going to be nested inside. F.e Navbar.js, BlogDetails.js, Sidebar.js. Under the sidebar component we nest more components (like Categories.js or Tags.js).

Create a Navbar.js - its function with return value. Export it.
Import Navbar from navbar.js in App.js. 
Use Navbar as a "html" tag. Can be written out or self-closed
<Navbar><Navbar/>
<Navbar/>

6. Adding Styles

Different css styles for different components and then import them in. Mainly for big projects this is a useful way.
For small project, just have a single css file. Index.css imported into the index.js file.

Styles are added to the head.

Inline styling -style="" or {for dynamic value}
style ={{}}
outer {} - refers that it is a dynamic value
inner {} - refers its going to be a JS object.
inside the object we can add css key - value parameters like color:"red", backgroundColor="black"

7. Events

Write a function before the return part. Normally name it like const handleClick or handleMouseOver etc.Then linked it to he button or dom where you need to be by onClick={the function name}.

NOTE: this function shouldn't be invoked (otherwise its going to be run already without clicking it),we need just the name.

Passing arguments
Cannot pass arguments directly in the return side because it gets invoked.
<button onClick={handleClickAgain("BOB")}>Click me again</button>
Except if we wrap it in an anonymous function.

8. useState Hook
State: of a component -  data is being used in that component at that point of time. Data can be anything (boolean, array) in that time what the component uses.
F.e login - false - the user is not logged in at that time.

A variable does not update in the template. F.e a name variable is in a the return code template and by clicking to a button we want to update the name. But in the template it wont update. This doesnt trigger a re-render "function" itself. We need to make this variable reactive - when it changes it re-renders.
This is what HOOKs are good for.

useState hook - special function
reactive value and the value can be change too.
import {useState} from "react"

const [nameoftehvalue, setNameofthevalue] = useState("initialvalue") - its a function.
By clicking smth - setNameofthevalue("the new value") - this how it will re-render and change the value in the template too.


HOOK - new features - before class writing was needed
We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. 

The only argument to useState is the initial state.

useState returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState()

State Hook
F.e A form - declaring state variables with initial state in a form. It is empty
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');
const [date, setDate] = useState('');

Write a handlerFunction - which is called in the return template input fields onChange.
const titleChangeHandler = (event) => {
setTitle(event.target.value); //input field value

const [fruit, setFruit] = useState('banana');
“array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:
  var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair


Other type of hooks:Effect Hook
It adds the ability to perform side effects from a function component.
React runs the effects after every render — including the first render.

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

Hook rules
-Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
-Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

9. React DevTools

10. Listing
useState - different initial 3 blogs. In return template should not be hard coded - if there is more blog still gonna show just 3

MAP - cycle through an array - return a template
Key attribute - must be added in order to React follow list and changes within
  -normally a uniq ID

11. Props and reusable components
bloglist component itself which job is cycle through blog list and then this own blog list component can be referred and used in other components instead of writing the same thing always.

Props - blog list in home page shows all the blog, but on a search page should show just the searched blogs - PROPs can help with that.


property in Home is on the props object and can be accessed.

12. Filter
Using the same blogList component but now with filter option. The filter should be written with the array.filter method inside the blog props.

13. Functions as Props - delete an item
Button with onClick function - anonymous function which calls a handleDelete function where the blog.id parameter can be passed in.

The handelFucntion should be where the data is - blog array in Home.js
create the handle Delete function on the top and then pass it as a attribute inside the BlogList template part. Then we can access this inside teh BlogList.js too.





