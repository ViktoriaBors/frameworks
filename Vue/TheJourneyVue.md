# Vue learning process

## 1.Day
Today I started to watch The Net Ninja - VUE JS Tutorial for beginners on YouTube.

I learned about what is Vue in general, how to create Vue App, stand-alone widgets and output dynamic variables in the HTML. 

Big take away of the day is Vue directives. Simply it is an instruction inside the HTML for Vue to do certain things in a certain way.

I know the following directives until now:
- v-on:event or @event
- v-if="", v-else-if="", v-else and v-show=""
Note v-show uses CSS display none or block to show or hide a certain thing if the condition is met. While v-if, v-else-if, v-else takes the HTML element out from the DOM.
- v-for="item/data/abc IN data", :key="item.id"-> reorder object item by id
- v-bind:attribute (v-bind:href or :href)
- v-bind:class="{key-value}" - if the value us true, the key is going to be a class "name"

## 2.Day
I started to dive in to full Vue project with different components and props. What I really like in a Vue component is that it has a well defined 3 parts (template, script and style). It makes the components more understandable. Right now my head is spinning from the lot of information. I need to process it. 

## 3.Day
Today was about events and its modifiers, slots, teleport and hooks. Slots are super useful and can make the component extremely reusable. Teleport is another cool features if I want to mount my component not inside the "App". 

I also learned about the lifecycle of the components and their hooks, when I can pass some event in.

I also made a little reaction time game where I actually understood the tutorial and why we doing it that way and managed to do the little challenge by myself. 

Now I am thinking to try all these simpler things by myself with some mini projects. I just need an idea :D

## 4.Day
Today I moved forward to forms and how extract the data from it. Moreover get insight to Vue router features.

## 5.Day
Today was dense. All about fetch API and composition API.

That also means I finished the tutorial from The Net Ninja.

I think I got the basics pretty good and I might able to start up my own big project (Track Down Bill). My most concern is right now I am not sure how to design the different components and how small a component should be etc. So I decided I give a few days to do a smaller project with kinda the same functions (CRUD). Something with a blog or todo application. 
