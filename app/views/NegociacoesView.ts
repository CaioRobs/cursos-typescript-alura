import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private viewEl: HTMLDivElement;

  constructor(selector: string) {
    this.viewEl = document.querySelector(selector);
  }

  template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          ${model
            .lista()
            .map((negociacao) => {
              return `
                <tr>
                  <td>
                    ${new Intl.DateTimeFormat().format(negociacao.data)}
                  </td>
                  <td>
                    ${negociacao.quantidade}
                  </td>
                  <td>
                    ${negociacao.valor}
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table> 
    `;
  }

  update(model: Negociacoes): void {
    const template = this.template(model);
    this.viewEl.innerHTML = template;
  }
}
