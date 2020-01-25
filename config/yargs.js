const descripcion = {
    demand:true,
    alias:'d',
    desc:'descripcion de la tarea'
}

const estado = {
    default:false,
    alias:'e',
    desc:'estado de la tarea'
}

const argv = require('yargs')
                .command('crear','Crea una nueva Tarea',{
                    descripcion,estado
                })
                .command('actualizar','Actualiza el estado de una tarea',{
                    descripcion,estado
                })
                .command('eliminar','Elimina una tarea',{
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}