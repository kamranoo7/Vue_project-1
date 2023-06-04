<template>
    <div id="heading">
        <h1>{{ text }}</h1>
        <q-btn color="white" text-color="black" label="Standard" />
    </div>
    
</template>
<script setup>
defineProps(['text'])
</script>
<style>
h1{
    font-weight: 500;
}
#heading{
    margin: auto;
    font-size: 20px;
    text-align: center;
    color:lightcoral;
    border-bottom: 1px solid black;
}
</style>