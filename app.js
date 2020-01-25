const argv = require('./config/yargs').argv;
const colors = require('colors');
const funciones = require('./logica/funciones');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        funciones.crear(argv.descripcion,argv.estado);
        console.log('Tarea Creada'.green);
        break;
    case 'listar':
        let listado = funciones.listar();
        listado.forEach(tarea => {
            console.log(`======= TAREA =======`.green);
            console.log(`Tarea: ${tarea.descripcion} Completado: ${(tarea.estado)?'Sí':'No'}`.yellow);
            console.log(`======= XXXXX =======`.gray);
        });
        break;
    case 'actualizar':
        let actualizado = funciones.actualizar(argv.descripcion, argv.estado);
        console.log(`Actualizado: ${(actualizado)?'Sí':'No'}`.yellow);
        break;
    case 'eliminar':
        let eliminado = funciones.eliminar(argv.descripcion);
        console.log(`Eliminado: ${(eliminado)?'Sí':'No'}`.red);
        break;       
    default:
        console.log('Comando invalido');
        break;
}