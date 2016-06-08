<template>
<div class="message">{{ msg}}</div>
</template>

<script>
    export default{
        data(){
            return {
                msg: 'Hello from vue-loader! what are you doing?'
            }
        }
    }
</script>

<style>
    .message{
        color:red;
    }
</style>