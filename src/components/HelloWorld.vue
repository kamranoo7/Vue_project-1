<template>
  <div>
<h1>{{ msg }}</h1>
<h2>{{ msg1 }}</h2>
<p>Count:{{ count }}</p>
<button @click="counter()">+</button>
  </div>
</template>
<script setup>
defineProps(["msg","msg1"])
//Counter
import { onUpdated, ref } from 'vue';
let count=ref(0)
let counter=()=>{
  count.value++
  console.log("count",count.value)
}
onUpdated(()=>{
  console.log("something changed")
})
</script>
<style>
</style>

