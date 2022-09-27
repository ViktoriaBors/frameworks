<template>
<div>
  <h1>{{title}}</h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <br>
  <Modal :header="header" text="get your discount" theme="sale"/>
</div>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      title: "My first Vue app",
      header: "sign up for giveaway"
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name.value)
    }
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid black;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
