// Generar listado de vehículos
function obtenerVehiculos(){
    const listaVehiculos = [
        {Marca: 'Peugeot', Modelo: '206', Puertas: '4', Precio: 200000},
        {Marca: 'Honda', Modelo: 'Titan', Cilindrada: '125cc', Precio: 60000},
        {Marca: 'Peugeot', Modelo: '208', Puertas: '5', Precio: 250000},
        {Marca: 'Yamaha', Modelo: 'YBR', Cilindrada: '160cc', Precio: 80500.5}
    ];
    
    return listaVehiculos;
}

// String de barras " // "
function barras(){
return ' \/\/ ';
}

// String de signos =
function separador(){
return '============================='
}

// Configuración para .toLocaleString()
let idioma = "es";
let opciones = {
    minimumFractionDigits: "2"
};

// Filtrar vehículos por modelo
function filtrarPorModelo(filtro){
    return vehiculos.filter(x => x.Modelo.includes(filtro));
}


/** Mostrar lista de vehículos **/
let vehiculos = obtenerVehiculos();
vehiculos.forEach(vehiculo => {
    const tipo = Object.keys(vehiculo)[2];
    console.log(
        'Marca: ' + vehiculo.Marca + barras() +
        'Modelo: ' + vehiculo.Modelo + barras() +
         tipo + ': ' + vehiculo[tipo] + barras() +
        'Precio: ' + '$' + vehiculo.Precio.toLocaleString(idioma,opciones) )});
console.log(separador());

// Ordenar arreglo de vehículos, por precio, de mayor a menor
vehiculos.sort(((a, b) => b.Precio - a.Precio));

/** Mostrar vehículo más caro y más barato **/
let tam = vehiculos.length;
console.log('Vehículo más caro: ' + vehiculos[0].Marca + ' ' + vehiculos[0].Modelo);
console.log('Vehículo más barato: ' + vehiculos[tam-1].Marca + ' ' + vehiculos[tam-1].Modelo);

/** Mostrar un vehículo con letra 'Y' en el modelo **/
let filtrados = filtrarPorModelo('Y');
if(filtrados[0]){
    console.log('Vehículo que contiene en el modelo la letra \`Y\´: ' +
                filtrados[0].Marca + ' ' +
                filtrados[0].Modelo + ' $' +
                filtrados[0].Precio.toLocaleString(idioma,opciones));
}
console.log(separador());

/** Mostrar vehículos ordenados por precio **/
console.log('Vehículos ordenados por precio de mayor a menor:');
vehiculos.forEach(vehiculo => {console.log(vehiculo.Marca + ' ' + vehiculo.Modelo)});
