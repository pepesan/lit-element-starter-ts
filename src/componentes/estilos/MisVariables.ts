import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('mis-variables')
export class MisVariables extends LitElement {
    private bgcolor?: string;


    override render() {
        this.bgcolor = this.classList.contains("rainbow")
            ? "linear-gradient(to right, red, yellow, green, blue, purple)"
            : "grey";

        return html`
            <style>
                div {
                    background: ${this.bgcolor};
                }
            </style>
            <div>Un elemento con estilo.</div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mis-variables': MisVariables;
    }
}
