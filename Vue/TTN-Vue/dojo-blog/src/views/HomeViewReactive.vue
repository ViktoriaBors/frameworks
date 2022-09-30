<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ninjaOne.name}} - {{ninjaOne.age}}</p>
    <button @click="updateNinjaOne">Update ninja One</button>
    <h2>Reactive</h2>
    <p>{{ninjaTwo.name}} - {{ninjaTwo.age}} - {{nameTwo}}</p>
    <button @click="updateNinjaTwo">Update ninja Two</button>

    <h2>Computed</h2>
    <input type="text" v-model="search">
    <p>search term: {{search}}</p>
   <div v-for="name in matchingNames" :key="name">
    <p>{{name}}</p>
   </div>
  </div>
</template>

<script>
import {ref, reactive, computed} from "vue"

export default {
  name: 'HomeView',
  setup(){
    const ninjaOne = ref({name:"mario", age:30})
    const ninjaTwo = reactive({name:"luigi", age:35})

    const names = ref(["mario", "luigi", "shaun", "peach", "obama", "viktor", "maria"])
    const search = ref("")
    console.log(names.value)
    const matchingNames = computed(()=>{
        return names.value.filer(name => name.includes(search.value))
    })
    

    const nameOne = ref("mario")
    let nameTwo = reactive("luigi")

    const updateNinjaOne = ()=>{
        ninjaOne.value.age = 40
    }

    const updateNinjaTwo = ()=>{
        ninjaTwo.age = 45
        nameTwo = "smth" // no update...
    }
    return {ninjaOne,ninjaTwo, updateNinjaOne, updateNinjaTwo, nameTwo, names, search, matchingNames}
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
