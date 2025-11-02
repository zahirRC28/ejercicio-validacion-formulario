/* VARIABLES */
const club = document.querySelector('#registro-club');
const perdida = document.querySelector('#registro-perdida');
/* EVENTOS */
club.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    const nombre = club.elements['name'].value
    const apellido = club.elements['apellido'].value
    const edad = club.elements['edad'].value
    const radioBtn = club.elements['genero'].value
    const suscriptcion = club.elements['Afirmacion'].checked
    const correo = club.elements['correo'].value
    const telefono = club.elements['telefono'].value

    validarFormCulb(nombre,apellido,edad,radioBtn,suscriptcion,correo,telefono);
});
perdida.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    const fechaPerdida = perdida.elements['fecha'].value
    const horaPerdida = perdida.elements['hora'].value
    const color = perdida.elements['color'].value
    const precio = perdida.elements['precio'].value
    const tipo = perdida.elements['tipo'].value
    // el .selectedOptions sirve para poder obeterner multiples opciones seleccionadas
    // con el map extraemos los valores de cada option seleccionado
    // usamos el spread operator para convertir todo en un array
    //todo antes del map te da una array de options y luego con map sacamos los valores
    const accesorios = [...perdida.elements['Accesorios'].selectedOptions].map(option => option.value);
    const marca = perdida.elements['marca'].value


    validarFormPerdida(fechaPerdida,horaPerdida,color,precio,tipo,accesorios,marca);
});
/* FUNCIONES */
/**
 * Valida si el formulario para registro de club esta correctamente antes de enviarlo
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {number} edad 
 * @param {string} radioBtn 
 * @param {boolean} suscriptcion 
 * @param {string} correo 
 * @param {string} telefono 
 */
const validarFormCulb = (nombre,apellido,edad,radioBtn,suscriptcion,correo,telefono) => {
    let valido = true;
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonotest = /^\d{9}$/;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(radioBtn);
    console.log(suscriptcion);
    console.log(correo);
    console.log(telefono);

    if(nombre === ''){
        alert('tienes que poner un nombre');
        valido = false;    
    }
    if(nombre.length <= 3){
        alert('El nombre es muy corto');
        valido = false;    
    }
    if(nombre.length >= 10){
        alert('El nombre es muy largo');
        valido = false;
    }
    if(apellido.length <= 3){
        alert('El apellido es muy corto');
        valido = false;    
    }
    if(apellido.length >= 10){
        alert('El apellido es muy largo');
        valido = false;
    }
    if(edad < 18){
        alert('Debes ser mayor de edad para suscribirte');
        valido = false;
    }
    if (!emailtest.test(correo)) {
        alert("Por favor, ingresa un email válido.");
        valido = false;
    }
    if (!telefonotest.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido de 9 dígitos.");
        valido = false;
    }
    if (valido === true) {
        club.submit();
    }
};
/**
 * Valida si el formulario de perida esta correctamente antes de enviarlo
 * @param {string} fechaPerdida 
 * @param {string} horaPerdida 
 * @param {string} color 
 * @param {number} precio 
 * @param {string} tipo 
 * @param {Array.<string>} accesorios 
 * @param {string} marca 
 */

const validarFormPerdida = (fechaPerdida,horaPerdida,color,precio,tipo,accesorios,marca) => {
    let valido = true;
    const fechaActual = new Date();
    //const horaActual = `${fechaActual.getHours()}:${fechaActual.getMinutes()}`;
    //console.log(horaActual);
    console.log(fechaPerdida,typeof fechaPerdida);
    console.log(horaPerdida, typeof horaPerdida);
    console.log(color,typeof color);
    console.log(precio);
    console.log(tipo);
    console.log(accesorios);
    console.log(marca);
    //Me di cuenta de que el new date tambien tiene la hora actual y lo mejor seria comprar todo junto
    //Como hora perdida era un string lo separamos
    const [hora, minutos] = horaPerdida.split(':');
    const fechaHoraPerdida = new Date(fechaPerdida);
    //luego de separarlo lo metenemos en la nueva variable para hacer la comparacion
    fechaHoraPerdida.setHours(hora, minutos);
    console.log(fechaHoraPerdida);
    //con el new Date convertimos el string a un objeto Date para poder comparar
    if(fechaHoraPerdida > fechaActual){
        alert('La fecha y hora de pérdida no puede ser mayor a la actual');
        valido = false;
    }
    if(horaPerdida === ''){
        alert('La hora de perdida es obligatoria');
        valido = false;
    }
    if (valido === true) {
        perdida.submit();
    }

};
/* INVOCACIONES */
