<template>
  <div class="container">
    <div v-if="!isPlaying">
      <Start></Start>
      <button @click="startGame">Start Here</button>
    </div>
      <Guesses v-if="isPlaying"></Guesses>
  </div>
</template>

<script>
import Start from "./components/Start.vue";
import Guesses from "./components/Guesses.vue";

export default {
  name: "App",
  components: {
    Start,
    Guesses,
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
    },
  },
};
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
.container {
  max-width: 550px;
  min-width: 300px;

  margin: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(252, 253, 234);
  color: rgb(59, 71, 60);
}
.container button {
  margin: 0.3rem;
  padding: 0.3rem;
  width: 150px;
  border: 1px black solid;
  border-radius: 5px;
  background-color: rgb(75, 93, 103);
  color: white;
}
.container button:hover {
  background-color: rgb(117, 145, 160);
  cursor: pointer;
}
.hidden{
     display: none;
 }
</style>
