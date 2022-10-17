const app = Vue.createApp({
    data(){
        return {
            output:"",
            confirmedOutput:""
        }
    },
    methods:{
        alertShow(){
            alert('You pressed the button')
        },
        outPut(event){
            this.output = event.target.value
        },
        confirmedOutPut(event){
            this.confirmedOutput = event.target.value
        }
    }
})

app.mount("#assignment")