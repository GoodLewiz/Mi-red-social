let usuarioActual = "";

let publicaciones = [
  {
    usuario: "Ana",
    contenido: "Hola mundo 🌍",
    likes: 0,
    comentarios: []
  },
  {
    usuario: "Carlos",
    contenido: "Mi primera publicación 😎",
    likes: 0,
    comentarios: []
  }
];

// LOGIN SIMULADO
function login() {
  let user = document.getElementById("username").value;
  if (user === "") return alert("Escribe un usuario");

  usuarioActual = user;
  document.getElementById("login").classList.add("hidden");
  document.getElementById("feed").classList.remove("hidden");

  renderPosts();
}

// MOSTRAR POSTS
function renderPosts() {
  let contenedor = document.getElementById("posts");
  contenedor.innerHTML = "";

  publicaciones.forEach((post, index) => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <strong>${post.usuario}</strong>
      <p>${post.contenido}</p>
      <button onclick="like(${index})">❤️ ${post.likes}</button>
      <br><br>
      <input placeholder="Comentar..." id="coment-${index}">
      <button onclick="comentar(${index})">Enviar</button>
      <ul>
        ${post.comentarios.map(c => `<li>${c}</li>`).join("")}
      </ul>
    `;

    contenedor.appendChild(div);
  });
}

// LIKE
function like(index) {
  publicaciones[index].likes++;
  renderPosts();
}

// COMENTAR
function comentar(index) {
  let input = document.getElementById(`coment-${index}`);
  let texto = input.value;

  if (texto === "") return;

  publicaciones[index].comentarios.push(usuarioActual + ": " + texto);
  input.value = "";

  renderPosts();
}

// PERFIL
function verPerfil() {
  document.getElementById("feed").classList.add("hidden");
  document.getElementById("perfil").classList.remove("hidden");

  document.getElementById("nombrePerfil").innerText = usuarioActual;
}

function volverFeed() {
  document.getElementById("perfil").classList.add("hidden");
  document.getElementById("feed").classList.remove("hidden");
}