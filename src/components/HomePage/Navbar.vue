<template>
    
    <div>
        <div id="navbar">
            <div id="lhs">Home</div>
            <div id="rhs">
                <div id="Account"> Account</div>
                <div id="Cart">
                    <div id="cart_count">
                        <q-icon @click="dialog =! dialog" name="shopping_cart" />
                        {{cartStore.cartCount}}
                    </div>
                    <Cartpopup :dialogVisibility="dialog"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Cartpopup from '../CartComponent/Cartpopup.vue';
import { useCartStore } from '../../Store';
import { ref } from 'vue';
let dialog=ref(false)
let cartStore=useCartStore()

</script>
<style scoped>
#navbar{
    
    display: flex;
    width: 100%;
    margin-top:-8px ;
    font-size: 17px;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid black;
}
#lhs{
    margin-left: 100px;
    display: flex;
    flex:3;
    align-items: center;
}
#rhs{
    display: flex;
    flex: 7;
    gap: 10px;
    margin-right: 30px;
    align-items: center;
    justify-content: flex-end;
}
#cart{
    display: flex;
    align-items: center;
}
</style>