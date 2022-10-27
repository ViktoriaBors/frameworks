const app = Vue.createApp({
    data(){
        return{
            friends: [
                {id:"manual", name: "Manual Loranz", phone:"3422342342", email: "asd@asd.com"},
                {id:"julie", name: "Julie Jules", phone:"3442342342", email: "dsadad@asd.com"}
            ],
            // detailIsVisible : false
        }
    },
    methods:{
        /*
        show(){
            this.detailIsVisible = !this.detailIsVisible
            // show both details if we click on hte second detail button
            // components will have
        }
        */
    }
})

app.component('friend-contact', {
    data (){
        return {
            detailIsVisible : false,
            friend:{id:"manual", name: "Manual Loranz", phone:"3422342342", email: "asd@asd.com"},
        }
    },
    methods:{
        show(){
            this.detailIsVisible = !this.detailIsVisible
            // show both details if we click on hte second detail button
            // components will have
        }
    },
    template:
    `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="show">Show Details</button>
        <ul v-if="detailIsVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `    
})

app.mount("#app")

//components - custom HTL element
// identifier - on custom HTML tag wth a DASH inside! multi-word with dash
// config object - the same as a VUE app. (can have data methods template etc)