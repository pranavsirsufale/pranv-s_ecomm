import { getCartProductsFromLS } from "../getCartProductFromLS";

export const removeFromCart  = (id) => {
    let items = getCartProductsFromLS();
    let newItems = items.filter((curElem)=>{
        return curElem.id != id 
        
    })

    return newItems;
} 