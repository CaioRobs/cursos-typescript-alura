export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`seletor ${seletor} nao existe no DOM`);
        }
        if (escapar)
            this.escapar = escapar;
    }
    update(data) {
        let template = this.template(data);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
