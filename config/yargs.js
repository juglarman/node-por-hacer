const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca cuando está completado'
};


const argv = require('yargs')
    .command('crear', 'crear elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra el estado completado por hacer', {
        descripcion
    })
    .help().argv


module.exports = {
    argv
}