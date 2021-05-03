<template>
  <h3>This is video detail {{id}}</h3>
</template>

<script>
import axios from 'axios'
export default {
    props:{
        id:Number
    },
    created(){
        axios.get(`http://localhost:3000/videolists/${this.id}`)
            .then(res => console.log(res.data))
    }
}
</script>

<style>

</style>