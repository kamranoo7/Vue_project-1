<template>
    <div>
     <Navbar/>
    <div id="container">
       
        <q-form id="form"
      @submit="onSubmit"  class="q-gutter-md" >
      <q-input
        filled
        v-model="form.name"
        label="Your name *"
        hint="Name and surname"
        
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your Contact *"
       hint="Contact"
      />

      <q-input
        filled
        v-model="form.address"
        label="Your Address *"
        hint="Address"
        
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        
      </div>
    </q-form>
    </div>
</div>
</template>


<script  setup>
import { reactive } from 'vue';
import Navbar from '../components/HomePage/Navbar.vue';
import { collection,addDoc,db } from '../Firebase';

import {useCartStore} from "../Store"
let cartStore=useCartStore()
let form=reactive({
    name:"",
    contact:null,
    address:"",
    order:cartStore.cart,
    total:cartStore.total
    
})
let onSubmit=async()=>{
    const docRef = await addDoc(collection(db, "order"),form);
console.log("Document written with ID: ", docRef.id);
}

</script>


<style scoped>
#container{
    margin-top: 7%;
}
#form{
    width: 50%;
}

</style>