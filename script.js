/* ____________MENU____________ */
((d) => {
  const $btnMenu = d.querySelector(".menu-button"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ____________GALERIA____________ */
((d) => {
  const $slides = d.querySelectorAll(".gallery-slide"),
    $prevBtn = d.querySelector(".prev-btn"),
    $nextBtn = d.querySelector(".next-btn");
  let i = 0;
  
  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault(); //Para que no se recargue la pagina
      $slides[i].classList.remove("active");
      i--;
      
      if (i < 0) { //Si llega a ser menor que 0, quiere decir que es el primer slide y se debe regresar al ultimo.
        i = $slides.length - 1;
      }
      
      $slides[i].classList.add("active");
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      console.log("Next")
      if (i > $slides.length - 1) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });
})(document);