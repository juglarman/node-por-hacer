const fs = require('fs');


let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer)
    guardarDB();

    return porHacer
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (error) => {
        if (error) {
            throw new Error('no se pudo');
        }
    });
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (des, compl = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === des;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = compl;
        guardarDB();
        return true;
    } else { return false }

}

const borrar = (des) => {
    cargarDB();
    let A = {};
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === des;
    });
    if (index >= 0) {
        A = listadoPorHacer[index];
        removeItemFromArr(listadoPorHacer, index)

        guardarDB();
    }


    return A;

}

const removeItemFromArr = (arr, i) => {

    let nuevo = arr;
    try {
        nuevo = arr.splice(i, 1);
    } catch (error) {
        console.log(error);
    }
    return nuevo;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}