const app = Vue.createApp({
    data(){
        return{
            count:0
        }
    },
    methods: {
        add5(){
            this.count = this.count + 5
        },
        add1(){
            this.count = this.count + 1 
        },
        add(num){
            this.count = this.count + num
        }
    },
    computed:{
        results(){
            if(this.count == 37){
                return 37
            } else if (this.count < 37) {
                return "Not there yet"
            } else if(this.count > 37){
                return "Too much"
            }
        }
    },
    watch: {
        results(value){
            console.log("change")
            const that = this
            setTimeout(function(){
                that.count = 0
            }, 5000)
        }
    }
})

app.mount("#assignment")