<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="showPost = !showPost">Toogle Post</button>
    <button @click="posts.pop()">Delete a post (pop method)</button>
    <div v-if="posts.length">
    <PostList v-if="showPost" :posts="posts"></PostList>
    </div>
    <div v-else>Loading ...</div>
    <p v-if="error">{{error}}</p>
    
  </div>
</template>

<script>
import {ref, } from "vue"
import PostList from "../components/PostList.vue"
import getPosts from "../composables/getPosts.js"

export default {
  name: 'HomeView',
  components: {
    PostList,
  },
  setup(){
    /*
    const posts = ref([// for fetch it stay empyty array
    
        {title:"welcome to the blog", body: "asdas dashdiu uiasfd", id: 1},
        {title: "top 5 css tips", body: "asoiduuyr fytsdf ds", id:2} 
        
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
    load()
*/
    const {posts, error, load } = getPosts()
    load()

    const showPost = ref(true)


    return {posts, showPost , error}
  },
  /*
  created(){
    console.log("created")
  },
  mounted(){
    console.log("mounted")
  },*/
}
</script>
