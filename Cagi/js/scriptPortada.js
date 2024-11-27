import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
    databaseURL: "https://lista-tareas-95970-default-rtdb.europe-west1.firebasedatabase.app/"
}



const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const users = ref(baseDades, "USUARIOS");

let usuarios = document.getElementById("users")

function addElement(e) {
    console.log(e)
    let contenidor = document.createElement("div");
    contenidor.classList += "usuario";

    let link = document.createElement("a");
    link.classList += "imagen";
    link.href = e[1].pag

    let imatge = document.createElement("img");
    imatge.src = e[1].url
    imatge.classList += "scale-up-center"
    
    let titol = document.createElement("h2");
    titol.textContent = e[1].nom
    titol.classList += "nombre";

    link.appendChild(imatge)
    contenidor.appendChild(link);
    contenidor.appendChild(titol)
    usuarios.appendChild(contenidor);


}



onValue(users, function (snapshot) {
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())
        console.log(resultats)

      for (let i = 0; i < resultats.length; i++) {
            addElement(resultats[i]);
        }
    

    }
});


