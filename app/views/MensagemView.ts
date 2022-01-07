import { View } from "./View.js";

export class MensagemView extends View<String> {
  protected template(data: string): string {
    return `
      <p class="alert alert-info">${data}</p>
    `;
  }
}
