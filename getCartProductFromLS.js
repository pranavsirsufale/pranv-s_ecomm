import { updateCartValue } from "./ecom/updateCartValue";

export const getCartProductsFromLS = () =>{
    let cartProduct = localStorage.getItem("cartProducts");
    if(!cartProduct){ // todo if localstorage was emtpty we would return an empty array
        return [];
    } 
    cartProduct = JSON.parse(cartProduct)

    //todo upddate the cart button value
    updateCartValue(cartProduct)

    //todo if localstorage has data we would return the data but after parsing it 
    return cartProduct;


}