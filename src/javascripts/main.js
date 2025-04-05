//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import * as emailjs from "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".dropdown-toggle").addEventListener("click", function (event) {
    if (!this.parentElement.querySelector(".dropdown-menu").classList.contains("show")) {
      window.location.href = this.href
    }
  })
})
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("contact-form").addEventListener("submit", function (e) {
//     e.preventDefault()
//     var templateParams = {
//       name: this.querySelector("[name='fullName']")?.value || "",
//       email: this.querySelector("[name='email']")?.value || "",
//       phone: this.querySelector("[name='phone']")?.value || "",
//       message: this.querySelector("[name='message']")?.value || "",
//     }
//     console.log(templateParams)

//     emailjs.send("service_i1pjxrm", "template_p2y7vhf", templateParams).then(
//       () => {
//         alert("✅ Message sent successfully!")
//         this.reset() // clear form
//       },
//       (error) => {
//         console.error("FAILED...", error)
//         alert("❌ Something went wrong. Try again.")
//       }
//     )
//   })
// })
