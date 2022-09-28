# Vue -  The Net Ninja - Vue 3 js tutorial for beginners

1. Intro
Vue
 - JS framework, web apps and single page apps, widgets (stand alone components like navbar or form)
- state and data driven

How Vue webpages are working?
Initial request comes to the server, then sends aback a bare-bone ("empty") HTML and the VUE JS. This JS gets the full control of the website in the browser and renders the different components and routing to other sub-side too. Doesnt send new request to the server - faster.

2. New features in Version 3
- composition API -> setup() function
- multiple root element to component
- teleport component -  modals
- suspense component - async until the data loading
- typescript

3. Stand-alone widget
link to VUE - cdn link

Vue.createApp () - can control certain part or full page
mount - where to mount the component into the DOM - id of the DOM - so inside of this div vue controls everything but outside of that div wont
data-v-app -> vue template

dynamic variables
data function inside the components of app and return the data itself we want to use later.
Use the data object key  in html by using {{key}}
If a key does not exist - it wont output anything

click events
directives - v-on:click="JS code" -> vue on smth like click or mousemove etc
we can interact inside the template or inside the components
no {} inside the directives if we write the JS code inside the template
SHORTCUT v-on = @ -> @click
Writing code inside component
methods (){
    changeSmth(){
        write the function here - invoke it inside the template 
        @click = "changeSmth" - template
        to refer to other properties THIS
    }
}

conditional rendering
v-if="some condition - if true shows it" - conditional directive
toggle the value
this.books= !this.books ->toogle
v-else
v-show - looks like doing the same as v-if
BUT
v-if - its false - takes the template out from the dom and insert it when its true -> good for if the user logged in or not adn what to show
v-show - using just css - display none or block -> good for navbar mobile menu etc

4. Other events
event object - mouseevent, event.type
no argument inside the function - then the event object is automatically the first one
if we want to pass our own argument too and have event object to be accessed - our own argument should be the second argument and event object the first
WRITE: handelEvent($event, ownarugment)

Outputting List
v-for -> cycle through array of data and render it
v-for = "item/data/book in array" so here "book in books"
it create the html tag element, then we need to output what we want to actually show

Attribute binding
bind dynamic values to html tag
a -href = google.com - its hardcoded
use v-bind:attribute for the html tag -> v-bind:href="properties/url"
shortcut : -> :href

dynamic classes
v-bind:class="{key-value}" - if true the class key going to be add to html tag

computed properties
data property inside the component which depends on other data
array - filtered book array, it depends on the books array. If it changes then the filtered array is changed
computed inside our app - a function which returns the filtered books bu using filter array function

5. Full VUE project
vue cli -> setting up
- sudo npm install -g @vue/cli -> globally installing vue cli so we can access it
- vue create PROJECT_NAME (be inside the folder you want to create the project)
Manually selected features
space for no linter -enter
vue 3 -enter
dedicated config files
no
- cd modal-project
- npm run serve

Project folder content
- node_modules -> all dependencies
- public -> index.html single page, this is the index.html sent to initially and then dynamically inject vue component
- src
    css, components, templates
    main.js - starts the application
    component -app.vue
        template, script and style
- package.json -> all the dependencies 

Templates
.vue - single component file
html template
script - export component object - optional
style - optional

template - can have may root (html tag vue element inside)
script - component, name, property, data etc
style - can be global

Templates Ref
document.querySelector -> in Vue instead we use template refs
inside the template we add a ref=Name as you want attribute. 
When we want to refer to it in the script - THIS.$refs.Name what you chose.
then we can do normal JS like classList.add("some css") or .value etc

Multiple Components
separate components for navbar, footer, article etc - so we can reuse them

App.vue - root component
header footer article - all nested individually inside the app component
but inside these components can be nested other components again
parent and child components

import component import name form path - inside the script tag where you use 
it. Plus needs to be added in export default components: {}, then can be added to the template
PROBLEM with multiword - go to vue.config.js and add - lintOnSave: false

5. Continue with Vue full project and component
Style - its globally if we just refer to a h1 - all h1 in every component going to be styled like that
solutions:
- add scoped to the style tag inside the component
using a lot - might be bad solution
- made the selector more specific like .modal h1
- global style sheet inside assets (instead #app in app.vue) - write it inside the main.js file as import

Props
can be passed from a parent to a child components (data passing), therefore define the data at the parent component.
Be in the parent component - In the template next the imported child component name a prop and give a value like <Modal header="Sign up for give away"/>
then in the child component vue write a script that the component accepts props
    <script>
            export default {
            props:["header"]
            }
    </script>

passing data - :header="", choose a data from the data(){return{}}

Custom events
can be fired in the child components and then it can be listened to from the parent component
click - custom event 
this.$emit("name of the event") - then in the parent components can be written @close=the function we want to use which is in the parent components

Event modifiers
modal is also closing when we click on the modal body/red part and not just at the backdrop
@click. - comes up a list. F.e right - right click fires the function
self - just on that element fires the event, no child element fires it

Slots
like props, but for more complicated templates for other components. It passes TEMPLATES to another component, NOT DATA
slot or name slot v-slt:the name

Teleport
want to have some components outside of the vue.app (in index.html #app), so outside of the vue scope.
instead of the components is inside a div in the App.vue - rename it to teleport to="css selector"

6. Lifecycle Hooks
beforeCreate - before the component even fully created, cannot get access to data or template
created - component has been created but not mounted, can access to data but not to template
beforeMount - before mounting, access all data, events and template
mounted - fetch request!

Then the component is mounted - different event (clicking to buttons) - data can change and then it updates
beforeUpdate - after the data is changed but before the updates are re-rendered
updated - after the data is changed and it is re-rendered

When the component no longer needed, it gets unmounted
beforeUnmount
unmounted
For component clean up






