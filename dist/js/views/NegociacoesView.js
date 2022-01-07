export class NegociacoesView {
    constructor(selector) {
        this.viewEl = document.querySelector(selector);
    }
    template(model) {
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
    update(model) {
        const template = this.template(model);
        this.viewEl.innerHTML = template;
    }
}
