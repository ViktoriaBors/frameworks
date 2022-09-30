import {ref, } from "vue"

const getPost = (id)=> {
    const post = ref(null)

    const error = ref(null) // for error handling

    const load = async ()=>{
        try{
            let data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id) //response inside the data variable
            if(!data.ok){
                throw new Error("no post found")
            }
            post.value = await data.json()
        }
        catch(err){
            error.value = err.message
            console.log(error.value)
        }
    }
    return {post, error, load}
}

export default getPost