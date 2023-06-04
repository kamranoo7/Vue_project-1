
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCartStore = defineStore('Cart', ()=>{
  // other options...
  let cart=ref([])
  let cartCount=computed(()=>
    cart.value.length
  )
  let carttotal= computed(()=>
  cart.value.reduce((total,product)=>{
    return Number(total)+ Number(product.price)
  },0)
)
  //Action:_ are the function which change the staete proprty
  let addtocart=(product)=>{
    cart.value.push(product)
    console.log(cart.value)
  }

  //Delete from Cart
  let removecart=(id)=>{
cart.value=cart.value.filter((el)=>{
    return el.id !==id
})
//CartToal

  }
  return {cartCount,addtocart,cart,removecart,carttotal}
})