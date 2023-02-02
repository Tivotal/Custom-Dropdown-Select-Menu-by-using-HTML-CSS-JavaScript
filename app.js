/* Created by Tivotal */

const menu = document.querySelector(".select-menu");

const btn = document.querySelector(".menu-btn");

const options = document.querySelectorAll(".option");
const btn_txt = document.querySelector(".btn-text");

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;

    btn_txt.innerText = selectedOption;

    menu.classList.remove("open");
  });
});

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
