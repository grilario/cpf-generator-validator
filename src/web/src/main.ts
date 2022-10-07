import "./style.css";

import { CPFGenerator } from "../../lib/generator";
import { CPFValidator } from "../../lib/validator";

(() => {
  const display = document.getElementById("display-generate");
  const button = document.getElementById("button-generate");

  button?.addEventListener("click", () => {
    const cpf = new CPFGenerator().generate({ format: true });
    console.log(cpf);
    
    if(display) {
      display.textContent = cpf;
    }
  });

  display?.addEventListener("click", () => {
    if (display.textContent) {
      navigator.clipboard.writeText(display.textContent)
    }

    alert('CPF copiado!')
  });
})();

(() => {
  const display = document.querySelector<HTMLInputElement>("input#display-validate");
  const button = document.getElementById("button-validate");
  const message = document.getElementById("message");

  button?.addEventListener("click", () => {
    if(!display) return 
    if(!message) return

    const isValid = new CPFValidator(display.value).validate()

    if(isValid) {
      message.textContent = 'Válido'
      message.classList.remove('invalid')
      message.classList.add('valid')
      return
    } 
    message.textContent = 'Inválido'
    message.classList.add('invalid')
    message.classList.remove('valid')

  });
})();
