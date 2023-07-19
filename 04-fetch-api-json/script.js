let urlBase = "https://jsonplaceholder.typicode.com";
// let query = "posts/1";

// GET - pedir información
// fetch(`${urlBase}/${query}`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let requestBody = {
//   title: "Marco comenta sobre tu publicacion",
//   body: "¡Que buena publicacion!",
//   userId: 1,
// };

// POST - enviar información
// fetch(`${urlBase}/posts`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(requestBody),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let posteo = 5;

// let requestBody2 = {
//   id: 3,
//   title: "Marco comenta sobre tu publicacion",
//   body: "¡Que buena publicacion!",
//   userId: 5,
// };

// PUT - editar información
// fetch(`${urlBase}/posts/${posteo}`, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(requestBody2),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// PATCH - editar información (solo se edita un atributo)
// let post = 10;
// let modificacion = {
//   title: "Este título ha sido modificado",
// };

// fetch(`${urlBase}/posts/${post}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(modificacion),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// DELETE - borrar un item
let elementoAEliminar = 7;

fetch(`${urlBase}/post/${elementoAEliminar}`, {
  method: "DELETE",
});
