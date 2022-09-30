<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Computed</h2>
    <input type="text" v-model="search">
    <p>search term: {{search}}</p>
   <div v-for="name in matchingNames" :key="name">
    <p>{{name}}</p>
   </div>
   <button @click="handleClick">Stop watch</button>
  </div>
</template>

<script>
import {ref, reactive, computed,  watch, watchEffect} from "vue"

export default {
  name: 'HomeView',
  setup(){
    const names = ref(["mario", "luigi", "shaun", "peach", "obama", "viktor", "maria"])
    const search = ref("")

    const stopWatch = watch(search, ()=>{
        console.log("watch run")
    })

    const stopWatchEffect = watchEffect(()=>{
        console.log("watchEffect runs", search.value)
    })

    const handleClick = ()=>{
        stopWatch()
        stopWatchEffect()
    }

    const matchingNames = computed(()=>{
        return names.value.filter(name => name.includes(search.value))
    })

    return { names, search, matchingNames, handleClick}
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
