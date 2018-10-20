<template>
    <div>
        <v-app>
            <router-view/>
        </v-app>
    </div>
</template>
<script>
    export default {
        name: "App"
    }    
</script>
<style>
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    overflow: hidden;
    /*margin-top: 60px;*/
    }
</style>
