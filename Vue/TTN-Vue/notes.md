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
