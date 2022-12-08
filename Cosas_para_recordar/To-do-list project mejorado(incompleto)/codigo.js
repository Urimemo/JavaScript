"use strict";

//Interfaz para el usuario
window.addEventListener("load",() => {
    const contenedor = document.querySelector(".contenedor");
    const input = document.querySelector(".input");
    const submit = document.querySelector(".submit");

    submit.addEventListener("click", event => {
        event.preventDefault();
        
        const info = input.value;
        if(!info){ alert("Por favor rellene todos los campos"); return;}
        
        input.value = ""; 

        const divEnlace = document.createElement("DIV");
        divEnlace.classList.add("enlace");

        const inputContenido = document.createElement("INPUT");
        inputContenido.classList.add("contenido");
        inputContenido.type = "text"
        inputContenido.value = info;
        inputContenido.setAttribute("readonly", "readonly")

        const btnEditar = document.createElement("BUTTON");
        btnEditar.classList.add("btn-editar", "btn");
        btnEditar.textContent = "Editar";

        const btnBorrar = document.createElement("BUTTON");
        btnBorrar.classList.add("btn-borrar", "btn");
        btnBorrar.textContent = "Borrar";

        divEnlace.appendChild(inputContenido);
        divEnlace.appendChild(btnEditar);
        divEnlace.appendChild(btnBorrar);

        contenedor.appendChild(divEnlace);

        createObject(info);

        btnBorrar.addEventListener("click", ()=> {
            contenedor.removeChild(divEnlace);
        })

        btnEditar.addEventListener("click", ()=> {
            if(btnEditar.innerHTML.toLowerCase() == "editar") {
                inputContenido.removeAttribute("readonly");
                btnEditar.textContent = "Guardar";
            } else {
                inputContenido.setAttribute("readonly", "readonly");
                btnEditar.textContent = "Editar";
            }
        });
        
    });
});


//Bases de datos
const dataB = indexedDB.open("Tareas");
dataB.addEventListener("error", ()=> console.log("Ha ocurridoun error al crear la base de datos"));
dataB.addEventListener("success", ()=> console.log("La base de Datos se ha creado correctamente"));
dataB.addEventListener("upgradeneeded", ()=> {
    const db = dataB.result;
    db.createObjectStore("tareas", {autoIncrement: true});
    console.log("El objeto se ha creado correctamente");
});

const createObject = obj => {
    const db = dataB.result;
    const IDBtrans = db.transaction("tareas", "readwrite");
    const addObject = IDBtrans.objectStore("tareas");
    addObject.add(obj);
    IDBtrans.addEventListener("complete", ()=> console.log("El objeto de ha creado correctamente"));
}

const deleteObject = key => {
    const db = dataB.result;
    const IDBtrans = db.transaction("tareas", "readwrite");
    const del = IDBtrans.objectStore("tareas");
    del.delete(key);
    IDBtrans.addEventListener("complete", ()=> console.log("El elemento se ha eliminado correctamente"));
}

const modObject = (key, obj) => {
    const db = dataB.result;
    const IDBtrans = db.transaction("tareas", "readwrite");
    const mod = IDBtrans.objectStore("tareas");
    mod.put(key, obj);
    IDBtrans.addEventListener("complete", ()=> console.log("El elemento se ha modificado correctamente"));
}