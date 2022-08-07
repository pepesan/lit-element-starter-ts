import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('mi-contenido')
export class Contenido extends LitElement {

    static override styles = css`
    
  `;

    @property({type: Number})
    aNumber = 5;

    override render() {
        return html`
      <h1>Contenido</h1>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-contenido': Contenido;
    }
}
