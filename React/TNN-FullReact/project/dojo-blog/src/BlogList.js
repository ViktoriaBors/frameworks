const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => // call back function with JSX template return
            <div className="blog-preview" key = {blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={()=> handleDelete(blog.id)}>Delete blog</button>
            </div>
        )}
        </div>
     );
}
// blog is not defined - copy-paste blogList use state here or use PROPS

/*BlogList = (props) => {

    const blogs = props.blogs
    const title = props.title
 
    console.log(props)
Accessing the props key-value pair need to be saved to variable 
Using destructuring to say what keys I want - makes the code cleaner - see above
    */
export default BlogList;