//FORMULARIO//

function envio_mail(nombre,mail,telefono,mensaje)
{
  body="Usted ha sido contactado por: " + nombre + "Su mail es: " + mail + "Su contacto es: " + telefono + "Y su mensajes es: " + mensaje
  window.location.href = "mailto:testmail@gmail.com?subject=Contacto de cliente&body=" + body;

}

var entrada = {}


const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const inputs2 = document.querySelectorAll("#formulario textarea");
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/,
  mensaje: /^[a-zA-ZÀ-ÿ-Z0-9_.+-\s]{16,140}$/,
};

const campos = {
  nombre: false,
  mail: false,
  telefono: false,
  mensaje: false,
};

function validarFormulario(e) {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;

    case "mail":
      validarCampo(expresiones.email, e.target, "mail");
      break;

    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;

    case "mensaje":
      validarCampo(expresiones.mensaje, e.target, "mensaje");
      break;
  }
}

const validarCampo = (expresion, input, campo) => {
  console.log(input.value);
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo-${campo}`)
      .classList.remove("formulario-input-incorrecto");
    document
      .getElementById(`grupo-${campo}`)
      .classList.add("formulario-input-correcto");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.remove("fa-rectangle-xmark");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.add("fa-square-check");
    document.querySelector(`#grupo-${campo} i`).style.visibility = "visible";
    document
      .querySelector(`#grupo-${campo} .formulario-input-error`)
      .classList.remove("formulario-input-error-activo");
    campos[campo] = true;
    entrada[campo] = input.value;
  } else {
    document
      .getElementById(`grupo-${campo}`)
      .classList.add("formulario-input-incorrecto");
    document
      .getElementById(`grupo-${campo}`)
      .classList.remove("formulario-input-correcto");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.add("fa-rectangle-xmark");
    document
      .querySelector(`#grupo-${campo} i`)
      .classList.remove("fa-square-check");
    document.querySelector(`#grupo-${campo} i`).style.visibility = "visible";
    document
      .querySelector(`#grupo-${campo} .formulario-input-error`)
      .classList.add("formulario-input-error-activo");
    campos[campo] = false;
    entrada[campo] = input.value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

inputs2.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos.nombre && campos.mail && campos.telefono && campos.mensaje) {
    alert("El formulario se enviará a continuación");
    envio_mail(entrada.nombre,entrada.mail,entrada.telefono,entrada.mensaje);
    formulario.reset();
    campos.nombre = false;
    campos.mail = false;
    campos.telefono = false;
    campos.mensaje = false;
    document.querySelector(`#grupo-nombre i`).style.visibility = "hidden";
    document.querySelector(`#grupo-mail i`).style.visibility = "hidden";
    document.querySelector(`#grupo-telefono i`).style.visibility = "hidden";
    document.querySelector(`#grupo-mensaje i`).style.visibility = "hidden";
  } else {
    alert("Por favor complete todos los datos."); 
  }
});
