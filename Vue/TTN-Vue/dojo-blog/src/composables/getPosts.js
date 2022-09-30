import {ref, } from "vue"

const getPosts = ()=>{
    const posts = ref([// for fetch it stay empyty array
    /*
        {title:"welcome to the blog", body: "asdas dashdiu uiasfd", id: 1},
        {title: "top 5 css tips", body: "asoiduuyr fytsdf ds", id:2} 
        */
    ])

    const error = ref(null) // for error handling

    const load = async ()=>{
        try{
            let data = await fetch("https://jsonplaceholder.typicode.com/posts") //response inside the data variable
            if(!data.ok){
                throw new Error("no data found")
            }
            posts.value = await data.json()
        }
        catch(err){
            error.value = err.message
            console.log(error.value)
        }
    }
    return {posts, error, load}
}

export default getPosts