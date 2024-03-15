import { getCartProductsFromLS } from "../getCartProductFromLS";
export const updateCart = () =>{
    let cartLength = localStorage.getItem('cartProducts');
    cartLength = (JSON.parse(cartLength)).length
    if(!cartLength){
        return 0;
    }
    return cartLength;
}