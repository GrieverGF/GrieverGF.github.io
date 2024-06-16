// Añadir un evento de clic al botón con id 'getJokeBtn' que ejecuta la función 'getJoke'
document.getElementById('getJokeBtn').addEventListener('click', getJoke);

// Definir la función 'getJoke' para obtener un chiste de la API
function getJoke() {
  // Usar fetch para hacer una solicitud GET a la API de Chuck Norris
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
      // Mostrar el chiste en el elemento con id 'jokeText'
      document.getElementById('jokeText').innerText = data.value;
    })
    .catch(error => console.error('Error:', error)); // Manejar cualquier error que ocurra durante la solicitud
}
