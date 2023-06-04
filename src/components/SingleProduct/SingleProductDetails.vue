<template>
    <div id="container">
        <div id="lhs">
            <img :src="product.imageUrl" alt="">
        </div>
        <div id="rhs">
            <h3>{{ product.title }}</h3>
            <p>{{ product.price }}</p>
            <q-btn @click="addtocart(product)" id="addtocart" label=" Add To Cart" color="black"/>
        </div>
   
</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { db,doc, getDoc } from "../../Firebase";
import { useRoute } from "vue-router";
import { useCartStore } from "../../Store";
let route=useRoute()

let product=ref([])
onMounted(async()=>{
    const docRef = doc(db, "VueStore", route.params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  let prod=docSnap.data()
  prod.id=docSnap.id
  product.value=prod 
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
})

//AddToCart
let cartStore=useCartStore()
let addtocart=(product)=>{
    //console.log(product)
    //calling the action present in store js
    cartStore.addtocart(product)
}
</script>


<style scoped>
#addtocart{
    width: 40%;
}
#container{
    display: flex;
    margin-top: 5%;
}
#lhs{
    display: flex;
    flex:4;
    margin-left: 100px;

}
#lhs img{
    width: 200px;

}
#rhs{
    display: flex;
    flex:6;
    flex-direction: column;
    margin-left: 3%;
    font-size: 100%;
}
</style>