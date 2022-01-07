import { View } from "./View.js";

export class MensagemView extends View<String> {
  template(data: string): string {
    return `
      <p class="alert alert-info">${data}</p>
    `;
  }
}
