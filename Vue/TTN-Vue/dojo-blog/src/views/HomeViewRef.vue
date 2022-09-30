<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">{{name}} is {{age}}</p>
    <button @click="handleClick">Click</button>
    <input type="text" v-model="name">
    <button @click="age++">Age adding</button>
  </div>
</template>

<script>
import {ref} from "vue"

export default {
  name: 'HomeView',
  setup(){
    console.log("setup")
    let name = ref("Mario") //ref(null)=empty input - going to be written  to the input field
    let age = ref(30)
    const p = ref("hello")
    console.log(p)

    const handleClick = ()=>{
      /*
      console.log("you clicked me"); 
      console.log(p,p.value);
      p.value.classList.add("pClass")
      */
    // name = "luigi" updates the variable but not in the template
     name.value = "luigi"
     age.value = 35
      }

    return {name:name, age, handleClick, p}
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
