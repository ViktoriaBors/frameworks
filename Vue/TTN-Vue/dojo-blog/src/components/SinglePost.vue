<template>
  <div class="post">
    <router-link :to="{name: 'details', params:{id:post.id}}">
    <h2>{{post.title}}</h2>
    </router-link>
    <p>Snippet: {{snippet}}</p>

  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:["post"],
    setup(props){
        const snippet = computed(()=>{
            return props.post.body.substring(0,15) + "...."
        })

        return {snippet}
    }
}
</script>

<style>

</style>