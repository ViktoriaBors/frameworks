import {useState} from "react"
import BlogList from "./BlogList";

const Home = () => {
    // could copy this to BlogList.js or use PROPS
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id) // save the blogs which doesnt want to be deleted
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "All blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>blog.author === "mario")} title = "Marios blogs!"/>
        </div>
    );
}

//<BlogList blogs={blogs} - blogs is part of the props now and can be accessed by props.blogs in BlogList.js
 
export default Home ;