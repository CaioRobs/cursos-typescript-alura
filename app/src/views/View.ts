export abstract class View<T> {
  protected element: HTMLDivElement;
  private escapar = false;
  constructor(seletor: string, escapar?: boolean) {
    const element = document.querySelector(seletor);
    if (element) {
      this.element = element as HTMLDivElement;
    } else {
      throw Error(`seletor ${seletor} nao existe no DOM`);
    }
    if (escapar) this.escapar = escapar;
  }

  public update(data: T): void {
    let template = this.template(data);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }

  protected abstract template(_model: T): string;
}
