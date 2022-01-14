import { NegociacaoController } from "./controllers/NegociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    "nao foi possivel iniciar a aplicação, Verifique se o form existe"
  );
}
