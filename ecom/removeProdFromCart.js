import { getCartProductsFromLS } from "../getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


export const removeProdFromCart = (id) =>{
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter( curPro =>
        curPro.id != id
    )
    // update the localStorage after removing the item
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
    let removeDiv = document.getElementById(id);
    if(removeDiv){
        removeDiv.remove();
        // show toast when product added to the cart 
        showToast("delete",id);
    }
    updateCartValue(cartProducts)
}