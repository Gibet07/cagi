import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const boto = document.getElementById("lista")

const appSettings = {
    databaseURL: "https://lista-tareas-95970-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "TAREAS");
/*

function anadir(item){
let l = document.getElementById("lista");
let el = document.createElement("li");
el.textContent = item;
el.addEventListener("click",function(){
    el.remove()
})
l.append(el);
addElement()
}
*/
function addElement(e) {
    console.log(e)
    for (let i = 1; i < e.length; i++) {
        let lista = document.getElementById("lista")

        let elementLlista = document.createElement("li");
        elementLlista.id = e[i][2]
        elementLlista.textContent = e[i][1];
    
        lista.appendChild(elementLlista)
    }
    

}

onValue(tasks, function (snapshot) {
    if(snapshot.exists()){
        let resultats = Object.entries(snapshot.val())

    for (let i = 0; i < resultats.length; i++) {
        addElement(resultats[i]);
    }
    }else{
        lista.innerHTML = "Añade tareas"
    }
}) 




/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const boto = document.getElementById("afegir")
const lista = document.getElementById("lista");


const appSettings = {
    databaseURL: "https://lista-tareas-95970-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "tareas");


boto.addEventListener("click", function(){
    push(tasks);
})


function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
*/


/*
boto.addEventListener("click", function () {
    push(tasks, input.value);
    clearScreen();
})

function addElement(e) {
    let elementLlista = document.createElement("li");
    elementLlista.id = e[0]
    elementLlista.textContent = e[1];
    elementLlista.addEventListener("click", function(){
        let localitzacioItem = ref(baseDades, `tareas/${e[0]}`)
        remove(localitzacioItem)
    })
    lista.append(elementLlista)
}

function clearScreen() {
    input.value = ""
}

function clearList() {
    lista.innerHTML = ""
}

onValue(tasks, function (snapshot) {
    if(snapshot.exists()){
        let resultats = Object.entries(snapshot.val())
    clearList()
    for (let i = 0; i < resultats.length; i++) {
        addElement(resultats[i]);
    }
    }else{
        lista.innerHTML = "No hay nada en la lista... aún"
    }
}) */