const app = Vue.createApp({
    data(){
        return{
            task : "",
            tasks: [],
            show: true
        }
    },
    methods:{
        addNew (){
            this.tasks.push(this.task)
            this.task = ""
        },
        toggle(){
            this.show = !this.show
        }
    },
})

app.mount("#assignment")