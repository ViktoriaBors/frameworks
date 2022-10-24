const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoal : "",
      persons: [
        {name:"me", age: 12},
        {name:"you", age:32}
      ]
     };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoal)
      this.enteredGoal = ""
    },
    remove(index){
      console.log("remove", index)
      this.goals.splice(index,1)
      
    }
  }
});

app.mount('#user-goals');

// v-if="true or falsy"
// v-else - must be after an element which has v-if -so the else is regarding to that value
// v-else-if - same as v-else
// the template part is not rendered at all

// v-show
// its a stand alone
// its rendered to the template only that the display is none

// v-for
// Oneelement in array
// get index (oneElement, index) in array
// :key is a must - that Vue can follow which element is rendered etc



