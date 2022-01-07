export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    update(data) {
        const template = this.template(data);
        this.element.innerHTML = template;
    }
}
