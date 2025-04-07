//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import resume from "../assets/resume-ashley-medell.pdf"
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle")

  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", function (event) {
      const dropdownMenu = this.parentElement.querySelector(".dropdown-menu")

      if (dropdownMenu && !dropdownMenu.classList.contains("show")) {
        const href = this.getAttribute("href")
        if (href) {
          window.location.href = href
        }
      }
    })
  }
})
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("downloadBtn")

  button.addEventListener("click", function () {
    const link = document.createElement("a")
    link.href = resume // or any file type
    link.download = "resume-ashley-medell.pdf" // optional
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
})
