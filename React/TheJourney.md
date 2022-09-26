# React learning process

## 1.Day
Today I started to watch The Net Ninja - Full React Tutorial on YouTube.

 I got to know what is react and what is used for, how to install a react app. I learned about the structure of a react app.

 I understood why components and component tree is important and how they work. I saw the difference between HTML and JSX. 

 I passed variables and click event in to JSX.

 "Surprising" new concept for me in React is that the UI/template and logic is not separated from each other. I have always separated html, css and js files during my projects. React is going to allow me to make templates and JS function within the same component. I also like the fact that React is updating only the necessary DOM element even though in the JSX describes all the template.

 Other interesting aspect is that every small or big reusable template should be its own component. Like a navbar, a blog entry or a comment. For example inside the comment components the author, the comment itself should be again a separate component. It makes sense and make the code cleaner. But right now it feels a little bit unnatural for me. I mean I might be just afraid that I dont know until how small fragments should I go down later?!

 ## 2.Day
**Hooks and Hooks and more Hooks**
This was the topic of a short day. I did not have time study too much. I got distracted :D Started to write the backend side of the app I am planning to do (the renovation helper app). But I managed to squeeze 1-2 hours of React study, where I got insight to Hooks and mainly useState Hook.

Shortly I would recap with the following example code

´´
 1:  import React, { useState } from 'react'; - import the useState
 2:
 3:  const smth = () => { //anonymous function
 4:     const [name, setName] = useState("Mario");
 5:     const [age, setAge] = useState(25)
 6:      const handleNameChange = ()=>{
 7:          setName("Not Mario anymore");
 8:          setAge(35)
 9:      }
10:    return (
11:      <div>
12:        <p>This is {name} and {age} old</p>
13:        <button onClick={handleNameChange}>
14:         Click me
15:        </button>
16:      </div>
17:    );
18:  }