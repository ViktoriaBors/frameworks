<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
        <li><strong>Phone:</strong>{{friend.phone}}</li>
         <li><strong>E-mail:</strong>{{friend.email}}</li>
    </ul>
  </li>
</template>

<script>
export default {
    data (){
        return {
            detailsVisible: false,
            friend: 
                 {id:'manual', name:"Manual Lorenz", phone:'123 123 123', email: 'asd@asd.com'}
        }
    },
    methods:{
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible
        }
    }
}
</script>

<style>
li{
    list-style: none;
}
</style>