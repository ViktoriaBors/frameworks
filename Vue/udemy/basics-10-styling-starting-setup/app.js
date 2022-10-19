const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected:false,
        }
    },
    methods:{
        boxSelected(box){
            switch(box){
            case 'A': 
                this.boxASelected = !this.boxASelected
                break
            case 'B': 
                this.boxBSelected = !this.boxBSelected
                break
            case 'C': 
                this.boxCSelected = !this.boxCSelected
                break
            case 'D': 
                this.boxDSelected = !this.boxDSelected
            break
        }
        }
    },
    computed:{
        boxDClasses (){
            return {active:this.boxDSelected}
        }
    }
})

app.mount("#styling")

// dynamic styling
// v-bind for class and style
// :style="{}" inline style not the best way
// binding class is better way
// :class={style class : true (when smth has a truthy value)}
// can be used as an array

