
// app/javascript/controllers/typed_js_controller.js
import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Radios", "Production", "Web"],
      typeSpeed: 150,
      loop: true,
      backDelay: 2000,
      startDelay: 500,
      backSpeed: 50,
    })
  }
}
