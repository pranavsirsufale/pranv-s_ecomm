import { getCartProductsFromLS } from "../getCartProductFromLS";
import products from './api/products.json';
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeFromCart } from "./removeFromCart";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartValue } from "./updateCartValue";
import { homeQuantitytoggle } from "./homeQuantitytoggle";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductsFromLS()

// let productCartTemplate = document.querySelector("#productCartTemplate")
// let productCartContainer = document.querySelector("#productCartContainer")


// //? this is my logic >>>
// cartProd.forEach(({price, quantity , id})=>{
//     let {name, category , image} = products.find(cur=> cur.id === id )
//     let productTemplelate = document.importNode(productCartTemplate.content,true);
//     productTemplelate.querySelector(".productPrice").innerHTML = price
//     productTemplelate.querySelector(".productName").innerText = name;
//     productTemplelate.querySelector(".productQuantity").innerHTML = quantity;
//     productTemplelate.querySelector(".category").innerText = category
//     productTemplelate.querySelector(".productImage").src = image;
//     productCartContainer.append(productTemplelate)

// })




let filterProducts = products.filter((curProd) =>{
    return cartProducts.some((curelem) => curelem.id === curProd.id)
})
// to update the addToCart page 

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate")

const showCartProduct = () =>{
    filterProducts.forEach((curProd)=>{
        const { category , id , image, name , stock, price} = curProd;

        let productClone = document.importNode(templateContainer.content , true);

        let lSActualData = fetchQuantityFromCartLS(id , price);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".cards").id = id;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image

        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;

        // productClone.querySelector(".cards").addEventListener("click",(e)=>{
        //     if(e.target.classList.contains("remove-to-cart-button")){
        //         let newItems = removeFromCart(id)
        //         localStorage.setItem("cartProducts",JSON.stringify(newItems));


          
        //     }
        // })

        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            incrementDecrement(event,id,stock,price);
            updateCartProductTotal()

        });

        productClone.querySelector(".remove-to-cart-button ").addEventListener("click",()=>{
            removeProdFromCart(id)
            
            updateCartProductTotal()
        })
        

        cartElement.appendChild(productClone)

    });
}
showCartProduct();

//? calculating the card total in our cart products page 
updateCartProductTotal()







