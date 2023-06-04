<template>
    <div>
    <Navbar/>
    <Banner text="Welcome to Vue Shops"/>
    <Cartpopup/>
    <Product/>
</div>
</template>
<script setup>
import Cartpopup from "../components/CartComponent/Cartpopup.vue";
import Product from "../components/Product.vue"
import Navbar from "../components/HomePage/Navbar.vue"
import Banner from "../components/HomePage/Banner.vue"
</script>

<style>
</style>