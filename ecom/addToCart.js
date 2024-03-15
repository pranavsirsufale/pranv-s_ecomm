import { getCartProductsFromLS } from "../getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event , id , stock)=>{

    //todo  getting data from localstorage 
    let arrLocalStorageProduct = getCartProductsFromLS()

    const currentProdElem = document.querySelector(`#card${id}`)
    let quantity = parseInt(currentProdElem.querySelector(".productQuantity").innerText);
    let price = currentProdElem.querySelector('.productPrice').innerText;
    price = Number(price.replace('₹',''));
    
    let existingProd = arrLocalStorageProduct.find((curProd) =>
        curProd.id === id 
    )
    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + quantity;
        price = (Number(price * quantity)).toFixed(2)
        let updatedCart = { id, quantity , price};
        updatedCart = arrLocalStorageProduct.map((curProd)=>{
         return curProd.id === id ? updatedCart : curProd;
        })
        console.log(updatedCart);
        localStorage.setItem("cartProducts",JSON.stringify(updatedCart));
    }

    price = (price*quantity).toFixed(2);
    if(existingProd){
        return false
    }
    
    
    arrLocalStorageProduct.push({id,quantity,price})
    //todo adding data into localstorage after stringify it 
    localStorage.setItem("cartProducts",JSON.stringify(arrLocalStorageProduct))

    showToast("add",id )

    //? update the cart button vlaue 
    updateCartValue(arrLocalStorageProduct)
}   