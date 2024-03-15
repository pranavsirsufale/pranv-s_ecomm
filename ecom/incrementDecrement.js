import { getCartProductsFromLS } from "../getCartProductFromLS";

export const incrementDecrement = (event , id , stock , price ) =>{


    const currentCardElement = document.getElementById(id);
    const productQuantity = currentCardElement.querySelector(".productQuantity")
    const productPrice = currentCardElement.querySelector(".productPrice")

    let quantity = 1;
    let localStoragePrice = 0;


    //todo  getting data from localstorage 
    let arrLocalStorageProduct = getCartProductsFromLS()

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id );
    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }else {
        localStoragePrice = price;
        price = price
    }

    if ( event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity += 1;
            productQuantity.innerText = quantity
            productQuantity.setAttribute('data-quantity', quantity)
            productPrice.innerText = localStoragePrice
        }else if ( quantity === stock){
            quantity = stock ;
            localStoragePrice = price * stock;
            productQuantity.innerText = quantity
            productQuantity.setAttribute('data-quantity', quantity)
            productPrice.innerText = localStoragePrice

        }
    }

    if( event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity -= 1;
            productQuantity.innerText = quantity
            productQuantity.setAttribute('data-quantity', quantity)
            productPrice.innerText = localStoragePrice
        }
    }

    //? finally  update the price in localStorage
    localStoragePrice = (price * quantity).toFixed(2);

    let updatedCart = { id , quantity , price : localStoragePrice};

    updatedCart = arrLocalStorageProduct.map((curProd)=>{
        return curProd.id === id ? updatedCart : curProd;
    })

    localStorage.setItem("cartProducts",JSON.stringify(updatedCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;
    

}