import { getCartProductsFromLS } from "../getCartProductFromLS"
let productSubTotal = document.querySelector('.productSubTotal')
let productCartContainer = document.querySelector(".productFinalTotal")

export const updateCartProductTotal = () =>{
    let cartProducts = getCartProductsFromLS()
    let sum = cartProducts.reduce((accum , curPro)=>{
        accum += Number(curPro.price) || 0;
        return accum
    },0)

    productSubTotal.innerText = `₹ ${sum.toFixed(2)}`;
    productCartContainer.innerText = `₹ ${(sum + 50).toFixed(2)}`
    

   

}