const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.log(this.$refs.userText)
      //gives the whole input element - get the value - .value
      // if it would be p - innerText
      this.message = this.$refs.userText.value
    },
  },
  beforeCreate(){
    console.log("before Create")
  },
  created(){
    console.log("create not mounted yet")
  },
  beforeUpdate(){
    console.log("before update - not seen the changes yet -new text output is not shown")
  },
  updated(){
    console.log("updated - see the result in the DOM")
  },
  beforeUnmount(){
    console.log("before unmount - see the app")
  },
  unmounted(){
    console.log("unmounted - app cannot be seen")
  }
});

app.mount('#app');
setTimeout(function(){
  app.unmount()
}, 3000)



// -- Template REFS --
// this.$refs.name of the ref you added to html

// Lifestyle Hooks
// can be added as methods - ut not inside the methods object








// proxy - wrap properties - new value - its updated then it updates on DOM

// Normal JS
let message = 'Hello'
let otherMessage = message + ' World'
console.log(otherMessage) // Hello World
message = 'Hello!!'
console.log(otherMessage) // Hello World - still - not updated
// JS default is not reactive
// "calculation is not re-calculates"

// Vue has the ability for these types of updates - because of proxy

const data = {
  message: 'Hello',
  otherMessage: 'Hello! World'
}

const handler= {
  set(target, key, value){
    console.log(target, key, value)
    if(key === 'message'){
      target.otherMessage = value + ' World'
    }
    target.message = value
  }
}

const proxy = new Proxy(data, handler) // JS proxy 
// wants an object and a second object with handlers
// handlers - set
proxy.message = "Hello!!"
// target = data, key = message, value= value of the key
console.log(proxy.otherMessage)

// 2. app - their data cannot be shared -cannot access to each other

const app2 = Vue.createApp({
  template:`
  <p>{{favoriteMeal}}</p>
  `,
  data(){
    return{
      favoriteMeal : 'Pizza'
    }
  }
})

app2.mount("#app2")

