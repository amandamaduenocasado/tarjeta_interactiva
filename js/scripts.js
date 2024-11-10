// HORA DE LLAMAR A LAS VARIABLES CSS. RECUERDA: SE USA PARA ACCEDER O MODIFICAR ESTILOS EN LÍNEA 
const rootStyles = document.documentElement.style;

// HORA DE LLAMAR A LAS CONSTANTES 

/* TARJETAS */
const cardNumberElement = document.getElementById("card-number");
const cardNameElement = document.getElementById("card-name");
const cardMonthElement = document.getElementById("card-month");
const cardYearElement = document.getElementById("card-year");
const cardCvcElement = document.getElementById("card-cvc");

/* INPUTS */ 

const inputNameElement = document.getElementById("inputname");
const inputNumberElement = document.getElementById("inputnumber");
const inputMonthElement = document.getElementById("inputmonth");
const inputYearElement = document.getElementById("inputyear");
const inputCvcElement = document.getElementById("inputcvc");

/* ERRORS */

const nameErrorElement = document.getElementById("nameError");
const numberErrorElement = document.getElementById("numberError");
const monthErrorElement = document.getElementById("monthError");
const yearErrorElement = document.getElementById("yearError");
const cvcErrorElement = document.getElementById("cvcError");

/* BUTTON */

const buttonElement = document.getElementById("button");

/* FORMULARIO */ 

const formElement = document.getElementById("form");

// CREAMOS LOS EVENTOS

// CREAMOS LA FUNCIÓN VALIDATION, SE ENCARGARÁ DE VERIFICAR SI LOS CAMPOS DEL FORMULARIO ESTÁN VACÍOS Y MOSTRARÁN UN MENSAJE DE ERROR SI ES EL CASO

const validation = (event) => {
// RECUERDA: LÍNEA IMPRESCINDIBLE CUANDO REALIZAMOS UN FORMULARIO. DETIENE EL COMPORTAMIENTO PREDETERMINADO DEL FORMULARIO. EN LUGAR DE QUE EL FORMULARIO SE ENVÍE A UN SERVIDOR O RECARGUE LA PÁGINA, ESTA LÍNEA EVITA QUE ESO OCURRA PARA QUE PUEDA HACERSE LA VALIDACIÓN PRIMERO 
    event.preventDefault();

/* NAME */ 
  if (inputNameElement.value === "") {
    nameErrorElement.classList.remove("errordisplay"); //Mostrar error
    console.log("campo no validado");
  } else {
    nameErrorElement.classList.add("errordisplay"); //Ocultar error
    console.log("campo validado");
  }
/* NUMBER */
  if (inputNumberElement.value === "") {
    numberErrorElement.classList.remove("errordisplay");
    console.log("campo no validado");
  } else {
    numberErrorElement.classList.add("errordisplay");
    console.log("campo validado");
  }

/* MONTH */
  if (inputMonthElement.value === "") {
    monthErrorElement.classList.remove("errordisplay");
    console.log("campo no validado");
  } else {
    monthErrorElement.classList.add("errordisplay");
    console.log("campo validado");
  }

/* YEAR */ 
  if (inputYearElement.value === "") {
    yearErrorElement.classList.remove("errordisplay");
    console.log("campo no validado");
  } else {
    yearErrorElement.classList.add("errordisplay");
    console.log("campo validado");
  }

/* CVC */
  if (inputCvcElement.value === "") {
    cvcErrorElement.classList.remove("errordisplay");
    console.log("campo no validado");
  } else {
    cvcErrorElement.classList.add("errordisplay");
    console.log("campo validado");
  }
};

// HORA DEL ESCUCHADOR
formElement.addEventListener("submit", validation);

// RELLENAR EL CAMPO DEL INPUT A LA VEZ QUE SE RELLENAN LAS TARJETAS 

/* IMPRESIÓN DEL NAME */ 

const printName = () => {
  if (inputNameElement.value !== "") {
// Se verifica si el campo de entrada para el nombre (inputNameElement) no está vacío.
    cardNameElement.textContent = inputNameElement.value;
// Si el campo de nombre no está vacío, el nombre que el usuario ingresa se refleja en la tarjeta en el lugar correspondiente (cardNameElement).
  } else {
    cardNameElement.textContent = "JANE APPLESEED";
  }
};

inputNameElement.addEventListener("input", printName);
// Cada vez que el usuario escribe en el campo del name (inputNameElement), el evento input se activa y llama a la función printName

/* IMPRESIÓN DEL NUMBER  */

const printNumber = () => {
  /* Si el número de tarjeta ingresado tiene más de 16 dígitos, se corta a 16 caracteres. Podemos sustituir este if, poniendo en el html maxlength: los caracteres que necesitemos, en este caso 16, y se bloqueará igual
  if (inputNumberElement.value.length > 16) {
    inputNumberElement.value = inputNumberElement.value.substring(0, 16);
  } */
  if (inputNumberElement.value !== "") {
    cardNumberElement.textContent = inputNumberElement.value;
  } else {
    cardNumberElement.textContent = "0000 0000 0000 0000";
  }
};

inputNumberElement.addEventListener("input", printNumber);

/*IMPRESIÓN DEL MONTH */

const printMonth = () => {
  if (inputMonthElement.value !== "") {
    cardMonthElement.textContent = inputMonthElement.value;
  } else {
    cardMonthElement.textContent = "00";
  }
};
inputMonthElement.addEventListener("input", printMonth);

/* IMPRESIÓN DEL YEAR */

const printYear = () => {
  if (inputYearElement.value !== "") {
    cardYearElement.textContent = "/" + inputYearElement.value;
  // Si el campo de año (inputYearElement.value) tiene un valor, se agrega la barra / antes del año y se muestra en la tarjeta.
  } else {
    cardYearElement.textContent = "/00";
  }
};

inputYearElement.addEventListener("input", printYear);

/*IMPRESIÓN DEL CVC */

const printCvc = () => { 
  if (inputCvcElement.value !== "") {
    cardCvcElement.textContent = inputCvcElement.value;
  } else {
    cardCvcElement.textContent = "000";
  }
};
inputCvcElement.addEventListener("input", printCvc);