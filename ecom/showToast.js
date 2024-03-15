export function showToast(operation , id ){
    const toast = document.createElement("div")
    toast.classList.add("toast");

    //Set the text content of the toast based on the operation
    if(operation === "add"){
        toast.textContent = `Product with ID ${id} has been added.`;
    } else {
        toast.textContent = `Product with ID ${id} has been deleted.`
    }

    document.body.appendChild(toast);

    // Automatically remove the toast after a few seconds 
    setTimeout(() => {
        toast.remove();
    }, 2000);
}


/*
css for toast notification 
 .toast {
    position: fixed;
    top:2rem;
    right:1.4rem;
    background-color: var(--buttonColor);
    color: #fff;
    padding: 10px 20px;
    border-radius:5px ;
    border-bottom:0;
    border-color: red; 
    font-size: 1.6rem;
    z-index:1000;
    font-family: "urbanist";
    animation : toastAnimation 2s linear;


    @keyframs toastAnimation{
        0%{
            transform : translateX(100%);
            opacity: 0;

        }
    }

 }
*/