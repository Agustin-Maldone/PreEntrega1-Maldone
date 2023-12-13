const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21
let preciofinal1 = 158000;
let preciofinal2 = 145000;
let preciofinal3 = 134000;
let descuento = 10000

let celu1 = resta(suma(preciofinal1, iva (preciofinal1)), descuento)
let celu2 = resta(suma(preciofinal2, iva (preciofinal2)), descuento)
let celu3 = resta(suma(preciofinal3, iva (preciofinal3)), descuento)


alert ("Bienvenido a nuestra calculadora de descuentos a continuacion tendra el stock disponible de productos");
alert ("Dentro de nuestros productos puede elegir: #1(iphone x) #2(Samsung s23) #3(Motog20)");
let precio = Number(prompt("Ingrese el numero de producto que desea consultar"));
if (precio === 1){
  alert(`el precio seria de: ${celu1}`)
}else if (precio === 2){
  alert(`El Precio seria de: ${celu2}`)
}else if (precio ===3){
  alert(`El precio seria de: ${celu3}`)  
}else{
  alert(`El numero ingresado no es valido`)
}



