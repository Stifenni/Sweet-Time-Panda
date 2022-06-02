// Header
document.getElementById("idheader").innerHTML = `
    <div class="logo">
        <a href="index.html"><img src="imagenes/Logo/Logo.svg" alt="Logo" class="logo"></a>
    </div>
    <nav id="idnav">
        <buttton id="menuhambur" aria-label="Openmenu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
            <span id="idhambur"></span>
        </buttton>
        <div class="menu">
            <ul id="idmenu" role="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </div>
    </nav>
   
`

// Footer
document.getElementById("idfooter").innerHTML = `
    <div class="foot">
        <div class="redes">

            <p class="pfoot">Redes Sociales:</p>

            <div class="social">
                <ul>
                    <li class="insta">
                        <a href="https://www.instagram.com/sweettimepanda/" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                    <li class="face">
                        <a href="https://www.facebook.com/Sweet-Time-249471575942040/?ti=as" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>

                    <li class="wa">
                        <a href="https://web.whatsapp.com/" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="copy">
            <p class="pfoot">Created by: SL 2022</p>
        </div>
    </div> 
`

// Menu hamburguesa
const btnHambur = document.getElementById('menuhambur');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();

  const nav = document.getElementById('idnav');

  nav.classList.toggle('active');

  const active = nav.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active);
  
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Openmenu');
  }
}

btnHambur.addEventListener('click', toggleMenu);
btnHambur.addEventListener('touchstart', toggleMenu);

// Validación formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
    apellido: false,
	mail: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

        case "lastName":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;

        case "email":
			validarCampo(expresiones.mail, e.target, 'mail');
		break;

		case "tel":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;	
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('itemError');
		document.getElementById(`${campo}`).classList.add('itemValido');
		document.querySelector(`#${campo} .error`).classList.remove('errorActivo');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('itemError');
		document.getElementById(`${campo}`).classList.remove('itemValido');
		document.querySelector(`#${campo} .error`).classList.add('errorActivo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.mail && campos.telefono) {
		document.getElementById('enviado').classList.add('enviadoActivo');
        document.getElementById('formMensaje').classList.remove('formMensajeActivo');
        setTimeout(() => {
			document.getElementById('enviado').classList.remove('enviadoActivo');
		}, 2000);
	} else {
		document.getElementById('formMensaje').classList.add('formMensajeActivo');
        document.getElementById('enviado').classList.remove('enviadoActivo');
	}
});



