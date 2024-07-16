document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5, // 50% of the section is visible
  };

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        btns.forEach((btn) => {
          btn.classList.remove("active");
          if (btn.dataset.target === `#${entry.target.id}`) {
            btn.classList.add("active");
          }
        });
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetSection = document.querySelector(e.target.dataset.target);
      const offset = targetSection.offsetTop;

      window.scrollTo({
        top: offset - 100,
        behavior: "smooth",
      });

      btns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
});
