const app = Vue.createApp({
    data(){
        return{
            name: 'Me',
            age: 34,
            randomData: Math.random(),
            link:'https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg',
            prePop: 'awesome'
        }
    },
    methods:{
        agePlus5 (){
            return this.age+5
        },
        random (){
            return Math.random()
        }

    }

})

app.mount("#assignment")
