class Tarea{
    constructor(tipo, proceso){
        this.tipo = tipo
        this.proceso = proceso
    }

    agendaHTML(pos) {
        return `
        <div id="hoja"> 
            <p id="apuntes">${this.tipo}</p>
            <img src="https://static.vecteezy.com/system/resources/previews/017/059/479/non_2x/arrow-sign-free-png.png" id="derecha" onclick="agregarH(${pos})">
        </div>
        `
    }
    
    agendaHTML2(pos) {
        return `
        <div id="hoja"> 
            <img src="https://static.vecteezy.com/system/resources/previews/017/059/479/non_2x/arrow-sign-free-png.png" id="izquierda" onclick="agregarP(${pos})">
            <p id="apuntes">${this.tipo}</p>
            <img src="https://static.vecteezy.com/system/resources/previews/017/059/479/non_2x/arrow-sign-free-png.png" id="derecha" onclick="agregarC(${pos})">

        </div>
        `
    }
    
    agendaHTML3(pos) {
        return `
        <div id="hoja"> 
            <p id="apuntes">${this.tipo}</p>
        </div>
        `
    }
}



let tareas = [];

let inputT = document.getElementById("input")
const boton = document.getElementById("boton")
let pendientes = document.getElementById("apuntes-pendientes")
let haciendo = document.getElementById("apuntes-haciendo")
let completado = document.getElementById("apuntes-completado")

function addText() {
    let name = inputT.value
    inputT.value = "";
    const tarea = new Tarea(name, "pendiente")
    tareas.push(tarea) 
    renderTarea()
}



function renderTarea() { 
    haciendo.innerHTML = "";
    pendientes.innerHTML = ""; 
    completado.innerHTML = "";
    
    for(let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i]
        if (tarea.proceso === "pendiente") {
            pendientes.innerHTML += tarea.agendaHTML(i)
        }
        else if (tarea.proceso === "haciendo") {
            haciendo.innerHTML += tarea.agendaHTML2(i)
        }
        else if (tarea.proceso === "completado") {
            completado.innerHTML += tarea.agendaHTML3(i)
        }
    }
}

function agregarH(pos) {
    let tarea = tareas[pos] 
    console.log(tarea)
    tarea.proceso = "haciendo" 
    renderTarea()
}

function agregarP(pos) {
    let tarea = tareas[pos]
    tarea.proceso = "pendiente"
    renderTarea()
}

function agregarC(pos) {
    let tarea = tareas[pos]
    tarea.proceso = "completado"
    renderTarea()
}

