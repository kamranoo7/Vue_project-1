<template>
    <div>
        <Navbar/>
        <h1>This is Admin Page</h1>
        <!-- <input v-model="form.name" type="text" id="name">
    <input v-model="form.contact" type="number">
    <input v-model="form.city" type="text">
    <input v-model="form.age" type="text"> -->
        <!-- {{ name }} -->
    <!-- {{ form }} -->

    <Admin/>
    </div>
</template>

<script setup>
import Admin from '../components/AdminComponent/Admin.vue';
import { ref,reactive } from 'vue';
import Navbar from '../components/HomePage/Navbar.vue';
// let name=ref("")
// let contact=ref(0)
// let form=reactive({
//     name:"",
//     contact:0,
//     city:"",
//     age:0
// })

</script>

<style scoped>

</style>