<template>
    <div id="Product">


<div @click="showProduct(product.id)" v-for="product in products" :key="product" id="Singledata">
 <!-- <img :src="name.image" alt="">
 <p>Title:-{{ name.title }}</p>
 
 <p>Price :{{name.price  }}</p> -->
 <img :src="product.imageUrl" alt="">
 <p>{{ product.title }}</p>
 <p>{{ product.price }}</p>
</div>

    </div>
    
</template>
<script setup>
import axios from "axios"
import { onMounted, ref } from "vue";
// import Productdata from "../Data/product.json"

// let products=Productdata
//console.log(Productdata)
//Mounted Phase
// onMounted(()=>{
//     let div=document.getElementById("Product")
// console.log(div)
// })
//Api Call Using fetch
let products=ref([])
// onMounted(async()=>{
//     let res=await fetch("https://fakestoreapi.com/products")
//     let data=await res.json()
// products.value=data
// })
//using Axios
// onMounted(()=>{
//     axios.get("https://fakestoreapi.com/products")
// .then((res)=>{
//     //console.log(res.data)
//     products.value=res.data
// })
// })
//Firebase
import {db,collection,getDocs} from "../Firebase"
//console.log(db)
import {useRouter} from "vue-router"
let router=useRouter()
//Fetch data with Firebase
   onMounted(async()=>{
    const result = await getDocs(collection(db,"VueStore"));

console.log(result)
result.forEach((doc) => {
  let product=doc.data() 
  product.id=doc.id
  products.value.push(product)
  //console.log(doc.id, " => ", doc.data());
  
});
   })

console.log(products.value)
// onMounted(async()=>{
// await getData()
// })
let showProduct=(id)=>{
    console.log(id)
    router.push(`productdetails/${id}`)
}

</script>

<style scoped>
#Product{
margin-top: 10px;
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 10px;

}
#Product img {
   
    margin-left: 50px;
    width: 120px;
    height: 120px;
}
#Singledata{
    border-radius: 5px;
    padding: 20px;
    
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>