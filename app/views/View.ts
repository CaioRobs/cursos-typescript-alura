export abstract class View<T> {
  protected element: HTMLDivElement;

  constructor(seletor: string) {
    this.element = document.querySelector(seletor);
  }

  update(data: T): void {
    const template = this.template(data);
    this.element.innerHTML = template;
  }

  abstract template(_model: T): string;
}
