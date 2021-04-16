const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.parentNode.classList.contains("faq")) {
      item.parentNode.classList.toggle("active");
    }
  });
});
