// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById('amigo').value;

  if (amigo == '' || !/^[a-zA-Z\s]+$/.test(amigo) || amigo.length < 3) {
    alert('Por favor, inserte un nombre');
    limpiarEntrada();
  } else {
    amigos.push(amigo);
    limpiarEntrada();
    listarAmigos(amigos);
    console.log(amigos);
  }
}

function limpiarEntrada() {
  document.querySelector('#amigo').value = '';
}

function listarAmigos(amigos = '') {
  const listAmigos = document.getElementById('listaAmigos');
  listAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listAmigos.appendChild(li);
  }
}

function sortearAmigo(amigos="") {
  if (amigos == '') {
    alert('Aun no ha agregado ningun amigo');
  } else {
    let numeroGenerado = Math.floor(Math.random() * amigos.length);
    console.log(numeroGenerado)
    let amigoElegido = amigos[numeroGenerado];
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML="";
    const li = document.createElement("li");
    li.textContent = `El amigo elegido es ${amigoElegido}`;
    listaResultado.appendChild(li);
  }
}
