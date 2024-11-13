/* eslint-disable */
import "bootstrap";
import "./style.css";
import { CardSlider } from "./slider.js";

const USERS = [
  {
    reviewer_name: "María López",
    position: "Ingeniera de Software",
    photo_url: "https://robohash.org/maria_lopez.png",
    rating: 4.8,
    className: "basic",
    review_text:
      "La app es increíblemente intuitiva y útil. He podido organizar mis proyectos de manera mucho más eficiente desde que la uso."
  },
  {
    reviewer_name: "Carlos Pérez",
    position: "Gerente de Proyectos",
    photo_url: "https://robohash.org/carlos_perez.png",
    rating: 4.6,
    className: "basic basic-two",
    review_text:
      "Esta app ha transformado la manera en que gestiono mi equipo. Las características de colaboración son excepcionales."
  },
  {
    reviewer_name: "Ana Martínez",
    position: "Diseñadora UX/UI",
    photo_url: "https://robohash.org/ana_martinez.png",
    rating: 4.9,
    className: "complex",
    review_text:
      "La experiencia de usuario en esta app es de primera categoría. La interfaz es elegante y muy fácil de usar."
  },
  {
    reviewer_name: "Luis Gómez",
    position: "Analista de Datos",
    photo_url: "https://robohash.org/luis_gomez.png",
    rating: 4.7,
    className: "complex",
    review_text:
      "Las funcionalidades de análisis de datos en esta app son impresionantes. Ha mejorado enormemente mi capacidad para interpretar datos."
  },
  {
    reviewer_name: "Elena Rodríguez",
    position: "Especialista en Marketing Digital",
    photo_url: "https://robohash.org/elena_rodriguez.png",
    rating: 4.5,
    className: "basic",
    review_text:
      "Esta app ha sido una herramienta vital en mis campañas de marketing. Las métricas y reportes son detallados y precisos."
  }
];

window.onload = function() {
  const $cardsContainer = document.querySelector(".cards");
  const $cardsContainerFullWidth = document.querySelector(".cards.full-width");
  const $sliderContainer = document.querySelector("#cardSlider");
  $cardsContainer.innerHTML = "";

  // Función para crear una tarjeta de testimonial
  const createTestimonialCard = user => {
    return `<div class="card-ax ${user.className}">
      <div class="card-content">
        <p class="text">${user.review_text}</p>
      </div>
      <div class="card-photo">
        <figure>
          <img src="${user.photo_url}" alt="${user.reviewer_name}" />
          <figcaption>
            <p class="name">${user.reviewer_name}</p>
            <p class="profession"><small>${user.position}</small></p>
          </figcaption>
        </figure>
      </div>
    </div>`;
  };

  const createTestimonialCardComplex = user => {
    return `<div class="card-ax ${user.className}">
    <div class="card-photo">
        <figure>
          <img src="${user.photo_url}" alt="${user.reviewer_name}" />
        </figure>
      </div>
      <div class="card-content">
        <div class="card-rating">
        ⭐⭐⭐⭐⭐
        </div>
        <p class="name">${user.reviewer_name}</p>
        <p class="profession"><small>${user.position}</small></p>
        <p class="text">${user.review_text}</p>
      </div>
    </div>`;
  };

  const slider = CardSlider($sliderContainer, USERS);

  // Generar tarjetas para cada usuario
  USERS.forEach(user => {
    if (user.className === "complex") {
      $cardsContainerFullWidth.innerHTML += createTestimonialCardComplex(user);
      return;
    }
    $cardsContainer.innerHTML += createTestimonialCard(user);
  });

  console.log({ USERS, CardSlider });
};
