// Sincronizar las letras con la canción
var audio = document.querySelector("audio"); 100
var lyrics = document.querySelector("#lyrics"); 50

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 15 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 30 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabía que algun dia pasaría", time: 45 },
  { text: "Que vendria el a buscarla con sus flores amarillas", time: 48 },
  { text: "No te apures, no detengas, el instante del encuentro", time: 56 },
  { text: "Esta dicho que es un hecho no la pierdas no hay derecho", time: 59 },
  { text: "No te olvides que la vida casi nunca esta dormida", time: 66 },

  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 92 },
  { text: "Ella llego en limusina amarilla por supuesto", time: 100 },
  { text: "El se acerco de repente la miro tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 115 },
  { text: "Ella sabia que el sabia que algun dia pasaria", time: 122 },

  { text: "Que vendria el a buscarla con sus flores amarillas", time: 125 },
  { text: "No te apures, no detengas , el instante del  |encuentro", time: 133 },
  { text: "Esta dicho que es un hecho no la pierdas no hay derecho", time: 136 },
  { text: "No te olvides que la vida casi nunca esta dormida", time: 142 },
  { text: "Flores amarillas", time: 159 },


  { text: "Ella sabía que él sabía que algun dia pasaría", time: 165 },
  { text: "Que vendria el a buscarla con sus flores amarillas", time: 168 },
  { text: "No te apures, no detengas, el instante del encuentro", time: 176 },
  { text: "Esta dicho que es un hecho no la pierdas no hay derecho", time: 180 },
  { text: "No te olvides que la vida casi nunca esta dormida", time: 186 },
  { text: "Ella sabia que el sabia el sabia ya sabia que el sabia ya sabia", time: 197 },
  { text: "Y se olvidaron de sus flores amarillas ", time: 200 },
  { text: "TE AMOO KEIRA BRIGITH CASALLO ALVARADO .", time: 220 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);