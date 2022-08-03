import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mis-estilos')
export class MisEstilos extends LitElement {

    static override styles = css`
      p {
        color: green;
      }
    `;

    @property({type: Number})
    aNumber = 5;

    override render() {
        return html`
            <p>I am green!</p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mis-estilos': MisEstilos;
    }
}
