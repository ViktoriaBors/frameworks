<template>
  <div>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <h3>{{post.title}} - not with other component</h3>
            <SinglePost :post="post"></SinglePost>
        </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from "../components/SinglePost.vue"

export default {
    props: ["posts"],
    components:{
        SinglePost
    },
    setup(props){
        onMounted(()=>{
            console.log("component mounted")
        })
        onUnmounted(()=>{
            console.log("component unmounted")
        })
        onUpdated(()=>{
            console.log("component updated")
        })
    }
}
</script>

<style>

</style>