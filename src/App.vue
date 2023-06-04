<template>
  <div id="main">
<!-- <HelloWorld msg1="Hello" msg="Welcome to Vue App"/>  -->
<!-- <Navbar/>
<Banner text="Welcome to Vue Shops"/> -->
 <!-- <Home/>  -->
 <router-view></router-view>
  </div>
</template>
<script setup>
// import HelloWorld from "../src/components/HelloWorld.vue"
// import Navbar from "./components/HomePage/Navbar.vue";
// import Banner from "./components/HomePage/Banner.vue"
import Home from './Views/Home.vue';
</script>
<style>
#main{
  padding-left: 2%;
  padding-right: 2%;
}
</style>