/* eslint-disable */
import "bootstrap";
import "./style.css";

const USERS = [
  {
    reviewer_name: "María López",
    position: "Ingeniera de Software",
    photo_url: "https://robohash.org/maria_lopez.png",
    rating: 4.8,
    review_text:
      "La app es increíblemente intuitiva y útil. He podido organizar mis proyectos de manera mucho más eficiente desde que la uso."
  },
  {
    reviewer_name: "Carlos Pérez",
    position: "Gerente de Proyectos",
    photo_url: "https://robohash.org/carlos_perez.png",
    rating: 4.6,
    review_text:
      "Esta app ha transformado la manera en que gestiono mi equipo. Las características de colaboración son excepcionales."
  },
  {
    reviewer_name: "Ana Martínez",
    position: "Diseñadora UX/UI",
    photo_url: "https://robohash.org/ana_martinez.png",
    rating: 4.9,
    review_text:
      "La experiencia de usuario en esta app es de primera categoría. La interfaz es elegante y muy fácil de usar."
  },
  {
    reviewer_name: "Luis Gómez",
    position: "Analista de Datos",
    photo_url: "https://robohash.org/luis_gomez.png",
    rating: 4.7,
    review_text:
      "Las funcionalidades de análisis de datos en esta app son impresionantes. Ha mejorado enormemente mi capacidad para interpretar datos."
  },
  {
    reviewer_name: "Elena Rodríguez",
    position: "Especialista en Marketing Digital",
    photo_url: "https://robohash.org/elena_rodriguez.png",
    rating: 4.5,
    review_text:
      "Esta app ha sido una herramienta vital en mis campañas de marketing. Las métricas y reportes son detallados y precisos."
  }
];

window.onload = function() {
  const $cardsContainer = document.querySelector(".cards");
  $cardsContainer.innerHTML = "";
  //write your code here
  const cardTemplate = `<div class="card-ax basic">
          <div class="card-content">
            <p class="text">${USERS[0].review_text}</p>
          </div>
          <div class="card-photo">
          <figure>
              <img src="${USERS[0].photo_url}" alt="${USERS[0].reviewer_name}" />
              <figcaption>
                <p class="name">${USERS[0].reviewer_name}</p>
                <p class="profession"><small>${USERS[0].position}</small></p>
              </figcaption>
          </figure>
          </div>
        </div>`;
  $cardsContainer.innerHTML = cardTemplate;
  console.log({ USERS, $cardsContainer, cardTemplate });
};
