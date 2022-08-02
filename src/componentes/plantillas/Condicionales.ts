import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mis-condicionales')
export class Condicionales extends LitElement {

    static override styles = css`
    
  `;

    @property({type: Number})
    aNumber = 5;

    override render() {

        return this.aNumber == 5

            ? html`<h2>El número vale: ${this.aNumber}</h2>`

            : html`<h2>El número no vale 5</h2>`;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mis-condicionales': Condicionales;
    }
}
