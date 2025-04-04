//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".dropdown-toggle").addEventListener("click", function (event) {
    if (!this.parentElement.querySelector(".dropdown-menu").classList.contains("show")) {
      window.location.href = this.href
    }
  })
})
