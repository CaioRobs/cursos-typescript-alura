import { View } from "./View.js";
export class MensagemView extends View {
    template(data) {
        return `
      <p class="alert alert-info">${data}</p>
    `;
    }
}
