const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullnameW:'',
      lastname:''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ""
    },
  },
  computed:{
    fullName(){
      if (this.name === "" || this.lastname === ""){
        return ""
      }
      return this.name + ' ' + this.lastname
    }
  },
  
  watch:{
    /*
    fullNameW(value){
      this.fullnameW = value + ' ' +  'something'
    }
    */
    counter(value){
      if (value > 50){
        this.counter = 0
      }
    }
  }
  
});

app.mount('#events');

// v-bind:attribute="variable" 
// v-bind+v-on:input on input fields has  shortcut called V-MODEL
// two-way binding - getting and updating the user input

// methods should not be output {{}} in template

// computed properties
// vue only re-execute them if one their dependencies are changed
// use it as a data property (not calling it)

// Watcher - function which executes when one of its dependencies changes
// similar to computed properties.
// data property inside the watch as a function -> name property changes then watcher going to watch it and execute what we wrtie inside

// change smth when it reach smth else
// timers http request 

// Methods: event and data binding {{function () }} - executes on every rerender..
// Computed: data binding, re-evaulates and executed if the dependencies changed
// watch: not directly on template, but can be used on data (http, timers) - on non data updates


// Shorthands
// v-bind: , v-on: => :nametobind or @click
