export const CardSlider = (sliderContainer, slidesData) => {
  const $cardSlider = sliderContainer.querySelector(".slide-container");

  let currentSlide = 0;

  $cardSlider.innerHTML = "";

  const slideTemplate = slideData => {
    return `<div class="card-ax slides">
      <div class="card-content">
        <p class="text">${slideData.review_text}</p>
      </div>
      <div class="card-photo">
        <figure>
          <img src="${slideData.photo_url}" alt="${slideData.reviewer_name}" />
          <figcaption>
            <p class="name">${slideData.reviewer_name}</p>
            <p class="profession"><small>${slideData.position}</small></p>
          </figcaption>
        </figure>
      </div>
    </div>`;
  };

  slidesData.forEach(slideData => {
    sliderContainer.innerHTML += slideTemplate(slideData);
  });

  const $slides = document.querySelectorAll(".slides");

  const showSlide = n => {
    $slides[currentSlide].classList.remove("active");
    currentSlide = (n + $slides.length) % $slides.length;
    $slides[currentSlide].classList.add("active");
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const addEventListenersToSlider = () => {
    const $nextSlide = sliderContainer.querySelector(".nextSlide");
    const $prevSlide = sliderContainer.querySelector(".prevSlide");
    $nextSlide.addEventListener("click", nextSlide);
    $prevSlide.addEventListener("click", prevSlide);
  };

  // Mostrar la primera imagen al cargar la página
  showSlide(currentSlide);
  addEventListenersToSlider();
};
