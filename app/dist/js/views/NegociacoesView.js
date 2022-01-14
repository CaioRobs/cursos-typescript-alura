import { View } from "./View.js";
export class NegociacoesView extends View {
    template(data) {
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
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}