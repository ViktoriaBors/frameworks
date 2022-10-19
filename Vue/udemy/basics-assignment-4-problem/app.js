const app = Vue.createApp({
    data(){
        return {
            isVisible: true,
            inputClass: "",
            colorInput: ""
        }
    },
    methods:{
        toggle(){
            console.log("toggle")
            this.isVisible = !this.isVisible
            console.log(this.isVisible)
        }
    },
    computed: {
        classes(){
           return {
            visible:this.isVisible, 
            hidden:!this.isVisible,
            user1 : this.inputClass == "user1",
            user2 : this.inputClass == "user2"
        }
        }
    },
})

app.mount("#assignment")