let fs = require('fs');

let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');

let tareasParseadas = JSON.parse(tareasJSON);

let process = require('process');

let operacion = process.argv[2];




switch(operacion){
    case undefined:
        console.log("Atención - Tienes que pasar una acción")
        break;
    case "listar":
        console.log(tareasParseadas)
        break;
    default:
        console.log("No entiendo qué quieres hacer")
}







