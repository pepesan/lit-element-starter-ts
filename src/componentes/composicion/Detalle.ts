import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "./Contenido";
@customElement('mi-detalle')
export class Detalle extends LitElement {

    static override styles = css`
    
  `;

    @property({type: String})
    item = "";

    override render() {
        return html`
      <li>
          ${this.item}
      </li>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-detalle': Detalle;
    }
}
