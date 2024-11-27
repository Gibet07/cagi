import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const boto = document.getElementById("lista")

const appSettings = {
    databaseURL: "https://lista-tareas-95970-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "TAREAS");

let puntos = 0;
function addElement(e) {
    
for (let i = 1; i < e.length; i++) {
        let lista = document.getElementById("lista")
        
        let elementLlista = document.createElement("li");
        elementLlista.id = e[i][2]
        elementLlista.textContent = e[i][1];

elementLlista.addEventListener("click",function(){
            let fetes = document.getElementById("fetes");
            let h2 = document.createElement("h2");
            h2.textContent = elementLlista.textContent

h2.addEventListener("click",function(){
                puntos += parseInt(elementLlista.id)
            console.log(puntos)
                h2.remove();
            })
            fetes.appendChild(h2);
        })

        lista.appendChild(elementLlista)
    }
}

onValue(tasks, function (snapshot) {
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            addElement(resultats[i]);
        }
    } else {
        lista.innerHTML = "Añade tareas"
    }
})

