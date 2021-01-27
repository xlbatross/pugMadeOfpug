// toggle navagation bar script
var n = document.querySelector(".menu.outside");
n.querySelector(".toggle").addEventListener("click", 
    () => {
        n.classList.toggle("show");
    }
);