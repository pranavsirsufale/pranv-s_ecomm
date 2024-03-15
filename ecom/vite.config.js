// vite.fonfig.js 
import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
    build:{
        rollupOptions:{
            input : {
                main : resolve(__dirname, "index.html"), // main entry point (home page)
                about: resolve(__dirname , "about.html"), // addition HTML pagges 
                contact : resolve(__dirname , "contact.html"),
                products : resolve(__dirname, "products.html"),
                addToCart: resolve(__dirname, "addToCart.html")

            }
        }
    }
})