import { addToCart } from "./ecom/addToCart";
import { homeQuantitytoggle } from "./ecom/homeQuantitytoggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate")
export const showProductContainer = (products) =>{
    if(!products){
        return false
    }
    
    let old = 1.5;

    products.forEach((curProd)=>{
        const {brand, category, description, id , image, name, price, stock} = curProd;
        //? importNode imports template 
        const productClone = document.importNode(productTemplate.content,true);

        productClone.querySelector("#cardValue").setAttribute('id',`card${id}`)

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = `${name} img`;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹ ${ (price).toFixed(2)}`;
        productClone.querySelector(".productActualPrice").textContent = `₹ ${ (price * old).toFixed(2)}`;
//? increment Decrement functionality 
        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            homeQuantitytoggle(event,id,stock);
        });
        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
            addToCart(event, id , stock);
        })
        productContainer.append(productClone)
    })

}