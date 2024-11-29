import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const boto = document.getElementById("lista")

const appSettings = {
    databaseURL: "https://lista-tareas-95970-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "TAREAS");
const completes = ref(baseDades, "GIBET");

let puntos = 0;
function addElement(e) {

    for (let i = 1; i < e.length; i++) {
        let lista = document.getElementById("lista")

        let elementLlista = document.createElement("p");
        elementLlista.id = e[i][2]
        elementLlista.textContent = e[i][1];
        elementLlista.classList += "tareasposibles"

        let feta = new Object()
                feta.tasca = e[i][1];
                feta.punts = e[i][2]

        elementLlista.addEventListener("click", function () {
            let fetes = document.getElementById("fetes");
            let h2 = document.createElement("h2");
            h2.classList += "porhacer"
            h2.textContent = elementLlista.textContent

            h2.addEventListener("click", function () {
                puntos += parseInt(elementLlista.id)

                console.log(feta)

                push(completes, feta)

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


onValue(completes, function (snapshot) {
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())

      
        addPuntuacio(resultats);
        
    } 
})
 
function addPuntuacio(e){
    let score = 0;
    for (let i = 0; i < e.length; i++) {

        score += parseInt(e[i][1].punts)
    }
    document.getElementById("score").innerHTML = score
}


document.getElementById("canjear").addEventListener("click",function(){
        console.log(score)
        let dinero = parseInt(score.textContent)/100;
        alert("Has ganado: "+dinero+"€")
        document.getElementById("score").innerHTML = 0
        remove(completes)
          /* 
        canjear()

        function canjear(){
        let pasta = document.createElement("h2")
        h2.textContent = (dinero.textContent+ "€");
        }
    
            let fetes = document.getElementById("fetes");
            let h2 = document.createElement("h2");
            h2.classList += "porhacer"
            h2.textContent = elementLlista.textContent

            h2.addEventListener("click", function () {
                puntos += parseInt(elementLlista.id)

                console.log(feta)

                push(completes, feta)

                h2.remove();
            })
            fetes.appendChild(h2);
        */
})
