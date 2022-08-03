import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Madre} from "./Madre";

@customElement('mi-hija')
export class Hija extends Madre {

    static override styles = [
        Madre.styles,
        css`div {
          color: red;
        }`
    ];


    override render() {
        return html`
            <div>Otro contenido</div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-hija': Hija;
    }
}
