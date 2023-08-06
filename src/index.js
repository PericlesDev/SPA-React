import home from "./pages/home/main.js";
import about from "./pages/about/main.js";
import contacts from "./pages/contacts/main.js";

const main = document.querySelector("#root");

const init = () => {
   window.addEventListener("hashchange", () => {
      main.innerHTML = "";
      switch(window.location.hash){
         case " ":
         main.appendChild(home());
         break;
         case "#about":
            main.appendChild(about());
         break;
         case "#contacts":
            main.appendChild(contacts());
         break;
         default:
         main.appendChild(home());
      }
})
}

window.addEventListener("load", () => {
   main.appendChild(home());
   init();
})
