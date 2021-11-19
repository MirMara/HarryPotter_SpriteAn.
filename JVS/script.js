document.addEventListener('DOMContentLoaded', () => {
   const btns = [...document.querySelectorAll("button")];
   const harry = document.querySelector('.harry');
   


   btns.forEach((button) => {
       button.addEventListener("click", (event) => {
        const interval = setInterval(() => {
            harry.classList.toggle("walk");
        }, 350);
           
        setTimeout(() => {
            clearInterval(interval);
        }, 2000);


           const direction = event.target.classList[0];
           switch (direction) {
           case "up": 
           harry.style.top ="225px";
           break;
           case "down": 
           harry.style.top ="525px";
           break;
           case "left": 
           harry.style.left ="650px";
           break;
           case "right": 
           harry.style.left ="950px";
           break;
           }
       });
   });
});