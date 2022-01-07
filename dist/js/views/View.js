export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.element = document.querySelector(seletor);
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
