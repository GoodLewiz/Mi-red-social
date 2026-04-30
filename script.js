let usuarioActual = "";

let publicaciones = [
  {
    usuario: "Ana",
    contenido: "Hola mundo 🌍",
    likes: 0,
    imagen: "https://i.pravatar.cc/40?u=Carlos",
    comentarios : []

  },
  {
    usuario: "Carlos",
    contenido: "Mi primera publicación 😎",
    likes: 0,
    imagen:  "https://i.pravatar.cc/40?u=Ana",
    comentarios : []
  }
];

// LOGIN SIMULADO
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "") return alert("Escribe un usuario");
  if(pass === "") return alert("Escribe una contraseña")
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
     <div style="display:flex; align-items:center; gap:10px;">
        <img src=${post.imagen}"alt="Foto de ${post.usuario}" width="40" height="40" style="border-radius:50%;">
        <strong>${post.usuario}</strong>
     </div>


      <p>${post.contenido}</p>
      <button onclick="like(${index})">❤️ ${post.likes}</button>
      <br><br>
      <input placeholder="Comentar..." id="coment-${index}">
      <button onclick="comentar(${index})">Enviar</button>
      <ul>
      ${post.comentarios.map(c => `
      <li style="display:flex; align-items:center; gap:8px; margin-top:8px;">
        <img src="${c.imagen}" alt="Foto de ${c.usuario}" width="30" height="30" style="border-radius:50%;">
        <span><strong>${c.usuario}:</strong> ${c.texto}</span>
      </li>
    `).join("")}
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

  publicaciones[index].comentarios.push({
   usuario : usuarioActual,
   texto :texto,
   imagen :  "https://i.pravatar.cc/40?u="
  });
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