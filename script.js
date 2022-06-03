const d = document,
  w = window;

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

      if (i < 0) {
        //Si llega a ser menor que 0, quiere decir que es el primer slide y se debe regresar al ultimo.
        i = $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      console.log("Next");
      if (i > $slides.length - 1) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });
})(document);

/* ________________FORMULARIO__________________ */
((d) => {
  const $form = d.querySelector(".form"),
    $inputs = d.querySelectorAll(".form [required]");

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern; //Patron para los inputs y para el textarea
      // console.log($input, pattern);

      if (pattern && $input.value !== "") {
        console.log("Tiene patron");
        let regExp = new RegExp(pattern);
        return !regExp.exec($input.value) //Si no cumple con la expReg
          ? d.getElementById($input.name).classList.add("is-active") //El id del $input.name es el span, si cumple agregamos el "is-active"
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        console.log("NO tiene patron");
        return $input.value === "" //si el valor del input no tiene nada...
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  //Herramienta para dar el submit
  d.addEventListener("submit", (e) => {
    // e.preventDefault();
    // alert("Enviando Formulario...");
    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 2000);
    }, 2000);
  });
})(document);

/* ________________Boton UP__________________ */
((d) => {
  const $btnUp = d.querySelector(".up-btn");

  d.addEventListener("scroll", () => {
    if (d.documentElement.scrollTop > 300 || w.pageYOffset > 300) {
      $btnUp.classList.remove("hidden");
    } else {
      $btnUp.classList.add("hidden");
    }
  });

  $btnUp.addEventListener("click", (e) => {
    if (e.target.matches(".up-btn")) {
      w.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
})(document);
