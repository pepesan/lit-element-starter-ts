import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('mi-shadow-dom')
export class MiShadowDOM extends LitElement {

    static override styles = css`
      :host {
        display: block;
        background-color: lightgray;
        padding: 8px;
      }
      :host(.blue) {
        background-color: aliceblue;
        color: darkgreen;
      }
    `;


    override render() {
        return html`
            <p>Hello World</p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-shadow-dom': MiShadowDOM;
    }
}
