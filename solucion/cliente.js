
// Función para generar datos aleatorios
function generateRandomData() {
    const temperature = (Math.random() * (35 - 15) + 15).toFixed(2);
    const humidity = (Math.random() * (80 - 20) + 20).toFixed(2);
    const airQuality = (Math.random() * (100 - 40) + 40).toFixed(0);
    const rainfall = (Math.random() * (50 - 0) + 0).toFixed(2);
    return `Temperatura: ${temperature}°C, Humedad: ${humidity}%, Calidad de aire: ${airQuality}, Lluvia: ${rainfall} mm`;
  }

const socket = io();

const dataContainer = document.getElementById('data-container');
const dataDisplay = document.getElementById('data-display');
const getDataButton = document.getElementById('get-data');
const getStatusButton = document.getElementById('get-status');

getDataButton.addEventListener('click', () => {
  socket.emit('command', 'data');
});

getStatusButton.addEventListener('click', () => {
  socket.emit('command', 'status');
});

socket.on('response', (response) => {
  dataDisplay.innerHTML = `<p>${response}</p>`;
});