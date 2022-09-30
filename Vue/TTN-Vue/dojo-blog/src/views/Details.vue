<template>
  <div>
    <h1>Details</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="post">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost.js"
export default {
    props: ["id"],
    setup(props){
        console.log(props.id)
        const {post, error, load } = getPost(props.id)
        load()
        
        return {post, error}

    }
}
</script>

<style>

</style>