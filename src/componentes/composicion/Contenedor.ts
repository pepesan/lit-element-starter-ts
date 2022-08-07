import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "./Contenido";
@customElement('mi-contenedor')
export class Contenedor extends LitElement {

    static override styles = css`
    
  `;

    @property({type: Number})
    aNumber = 5;

    override render() {
        return html`
      <h1>Contenedor</h1>
      <mi-contenido>

      </mi-contenido>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-contenedor': Contenedor;
    }
}
