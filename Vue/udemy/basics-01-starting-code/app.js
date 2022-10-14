const app = Vue.createApp({
    data(){
        return {
            courseGoal : 'Finish the course',
            courseGoalA: 'Learn Vue',
            courseGoalB: 'Master Vue',
            courseGoalC: '<p>Something else</p>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal(){
            const random = Math.random()
            if(random < 0.5){
                return 'Learn Vue'
            } else {
                return 'Master Vue'
            }
        },
        outputGoal2(){
            const random = Math.random()
            if(random < 0.5){
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
})
// vue is available objects, because in the index.html we linked vuejs.org. 
// vue object is available, we can call createApp function

// next define which html element we want to control wit vue. It will control that html element, and all its child elements too.
//mount(CSS selector which html should be controlled - ID)
app.mount('#user-goal')

// inside vue.cerateApp - configuration can be set

// data - vue specific key
    // - waits a function
    // - return an object! always an objects, where we can set up a key:value pair with property and values what you wan to store

    // {{variable name in data}} - written in html template - gonna be output

// v-bind attribute
// a href="{{variable name}}" - like this it writes out the name of the variable -  but not the stored link itself
    //{{}} only good when we want to use it between html tag element opening and closing tag.
    // so when we have an html tag and an attribute after the opening tag -  wont work
//v-bind :nameofvariable
// set the value on html element - set the value of the href attribute to some variable
//v-bind:href="vueLink" , shorter :bind="vueLink"

// methods - objects of functions
// this can be called inside the html template to {{function()}} - return value is a must 
// inside the function we want to use the variable we have inside the data - THIS.variableName
    //because data object return different key-value pairs - where Vue is going to look for if we use this.variableName

// v-html - html output
// <p v-html="courseGoalC"></p> in html
//v-html="variable or function()"
