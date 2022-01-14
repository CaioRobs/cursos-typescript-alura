import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./View.js";

export class NegociacoesView extends View<Negociacoes> {
  protected template(data: Negociacoes): string {
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
          ${data
            .lista()
            .map((negociacao) => {
              return `
                <tr>
                  <td>
                    ${this.formatar(negociacao.data)}
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

  private formatar(data: Date) {
    return new Intl.DateTimeFormat().format(data);
  }
}
