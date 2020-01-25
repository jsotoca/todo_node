const fs = require('fs');

let tareasPorHacer = [];


const cargarBD = ()=>{
    try {
        tareasPorHacer = require('../bd/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

const guardarBD = ()=>{
    fs.writeFile('bd/data.json',JSON.stringify(tareasPorHacer),(err)=>{
        if(err) throw new Error('No se pudo grabar en la BD',err);
    });
}

const crear = (descripcion,estado)=>{
    cargarBD();
    tareasPorHacer.push({descripcion,estado});
    guardarBD();
}

const listar = ()=>{
    cargarBD();
    return tareasPorHacer;
}

const actualizar = (descripcion,estado)=>{
    cargarBD();
    let posicion = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (posicion >= 0) {
        tareasPorHacer[posicion].estado = estado;
        guardarBD();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion)=>{
    cargarBD();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (nuevoListado.length < tareasPorHacer.length) {
        tareasPorHacer = nuevoListado;
        guardarBD();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}