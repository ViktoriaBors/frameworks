const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : "",
      confirmedName: ""
    };
  },
  methods:{
    addOne(){
      this.counter++
    },
    minusOne(){
      this.counter--
    },
    add(num){
      this.counter = this.counter + num
    },
    minus(num){
      this.counter = this.counter - num
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName 
    },
    submitForm(event){
      event.preventDefault()
      console.log('submit')
    },
    submitForm2(){
      console.log('submit')
    },
    confirmName(){
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');

// adding event listener to html element - v-on
// v-on:event type (click, keydown etc) = "simple code or function() with calling or without calling it (just pointing at it)"
// DOnt forget THIS inside the method functions

// Event arguments
// possible pretty same as in JS.

// input event on input field

// every event listener has one default argument EVENT
// if event is not the only argument, you need to set it as a parameter for the function call in the template by $event

// event modifier
//form plus button -> submit -> reloading the page
// prevent browser default and handle the form manually
// v-on:submit -> write a method for the submit and event prevent.
// v-on:eventtype.MODIFIER
// v-on:submit.prevent="function"

// right click
//v-on:click. right / middle -> only react if right mouse button was clicked
// v-on:keyup.enter

// v-once - preserve the initial state
