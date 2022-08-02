import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('mi-slot-complejo')
export class SlotComplejo extends LitElement {

    override render() {

        return  html`
                <div>
                    <h4>Slot complejo</h4>
                    <slot name="one"></slot>
                    <slot name="two"></slot>
                    <slot>I am fallback content</slot>
                </div>
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-slot-complejo': SlotComplejo;
    }
}
