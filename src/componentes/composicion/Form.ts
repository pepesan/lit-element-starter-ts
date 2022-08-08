import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('mi-form')
export class Form extends LitElement {

    static override styles = css`
    
  `;

    @property({type: String})
    aText = "";
    @property({type: Function})
    onSubmit(e: Event){
        e.preventDefault();
        console.log(this.aText);
    }
    override render() {
        return html`
      <h1>Mi Form</h1>
      <form @submit="${this.onSubmit}">
          <input type="text" .value="${this.aText}"/>
          <input type="submit" value="Enviar"/>
      </form>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-form': Form;
    }
}
