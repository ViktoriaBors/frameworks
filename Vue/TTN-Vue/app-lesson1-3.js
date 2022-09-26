console.log("hello vue")

const app = Vue.createApp({
    // vue component - data, functions , template can be set up here
    //template: "<h2>I am a Vue template</h2>"
    // several line of template - you can create the template directly in the html
    data (){
        return {
           title: "The final Empire" ,
           author: "Brandon Sanderson",
           age: 45,
           showBooks: true,
           // for mousevent part - x y offset
           x:0,
           y:0,
        }
    },
    //methods - every function runs here
    methods: {
        changeAge(){
            console.log("clicked")
            // use THIS to get access for keys
            this.age = this.age - 1 
        },
        changeTitle(title){
            this.title = title
        },
        toggleShowBook(){
            this.showBooks = !this.showBooks
        },
        handleEvent(event, number){
            console.log(event, event.type)
            if(number){
                console.log(number)
            }
        },
        handleMouseMove(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})


app.mount("#app")