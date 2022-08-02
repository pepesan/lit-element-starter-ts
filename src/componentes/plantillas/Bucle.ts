import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mi-bucle')
export class Bucle extends LitElement {

    static override styles = css`
    
  `;

    @property() colors = ['red', 'green', 'blue'];

    override render() {
        return html`
            <ul>
                ${this.colors.map((color) =>
                        html`<li style="color: ${color}">Color: ${color}</li>`
                )}
            </ul>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-bucle': Bucle;
    }
}
