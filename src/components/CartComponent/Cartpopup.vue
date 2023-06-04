<template>
    <div id="cart">
        

        <q-dialog  :seamless="true" :modelValue="dialogVisibility" position="right">
      <q-card id="cart_card">
        

        <q-card-section>
          <div>
            <h3>Recently Added Items</h3>
            <h1>{{ cartStore.total }}</h1>
          </div>
<div>
    Cart Totak:- 
</div>
          <q-space />

          <div id="carr_products">
            <div v-for="product in cartStore.cart" :key="product" id="cart_product">
                <div id="lhs">
                    
                    <img :src="product.imageUrl" alt="">
                </div>
                <div id="rhs">
                    <p>Title: {{ product.title }}</p>
                    <p>Price: {{ product.price }}</p>
                    <q-icon @click="removecart(product.id)" name="delete"/>
                </div>
            </div>

          </div>
          <router-link to="/order">
            <div id="place_order">
<q-btn color="secondary" label="Proceed"/>
          </div>
          </router-link>
         
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useCartStore } from "../../Store";
defineProps(["dialogVisibility"])
let dialog = ref(true)
let cartStore=useCartStore()
let removecart=(id)=>{
    cartStore.removecart(id)
}

</script>


<style scoped>
#cart_card{
    margin-top: 37px;
    height: 700px;
    width: 300px;
}
#cart_product{
    display: flex;
gap: 20px;
}
#cart_product div{
    
    margin-top: 4%;
}
#lhs img {
    border-radius: 10px;
    width: 150px;
    height: 130px;
}
h3{
    width: 150px;
    font-size: 15px;
}
#lhs{
    display: flex;
    flex: 6;
}
#rhs{
    
    flex: 4;
}
#placeorder{
    margin-top:0px;
}
a{
    text-decoration: none;
}
</style>



