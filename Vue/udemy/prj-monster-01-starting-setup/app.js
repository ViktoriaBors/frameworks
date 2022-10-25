const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound : 0,
            msg:null,
            logMessage: []
        }
    },
    methods:{
        attackMonster(){
            let random = Math.floor(Math.random()*10)
            this.monsterHealth -= random
            this.currentRound++
            this.addLog("player", "attack",random)
            this.attackPlayer()
        },
        attackPlayer(){
            let random = Math.floor(Math.random()*10)
            this.playerHealth -= random
            this.addLog("monster", "attack",random)
        },
        specialAttack(){
            if(this.currentRound == 0){
                return
            }
                let random = Math.floor(Math.random()*13)
                this.monsterHealth -= random
                this.currentRound++
                this.addLog("player", "special-attack",random)
                this.attackPlayer()
        },
        healPlayer(){
            let random = Math.floor(Math.random()*10)
            this.currentRound++
            if(this.playerHealth + random > 100){
                this.playerHealth = 100
            } else {
                this.playerHealth += random
            }
            this.addLog("player", "heal",random)
            this.attackPlayer()
        },
        newGame(){
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.msg = null
            this.logMessage = []
        },
        surrender(){
            this.msg =  "Monster won, You surrendered"
        },
        addLog(who, event, value){
            this.logMessage.unshift({
                by: who,
                action: event,
                actionValue: value
            })
        }
    },
    computed:{
        monsterWidthBar(){
            if(this.monsterHealth < 0 ){
                return {width: '0%'}
            } else  return {width : this.monsterHealth + '%'}
        },
        playerWidthBar(){
            if(this.playerHealth < 0 ){
                return {width: '0%'}
            } else  return {width : this.playerHealth + '%'}
        },
        useSpecAttack (){
            return this.currentRound % 3 !== 0
        },
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.msg = "It is draw"
            } else if(value <= 0){
                this.msg = "Monster won, You lost"
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.msg = "draw"
            } else if(value <= 0){
                this.msg = "You won"
            }
        }
    }
})

app.mount("#game")