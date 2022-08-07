import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from "lit/decorators";

@customElement('mi-otro-slot-complejo')
export class OtroSlotComplejo extends LitElement {

    @property() colors = ['red', 'green', 'blue'];

    override render() {

        return  html`
            <div>
                
                    <slot name="header"></slot>
                    <slot name="footer"></slot>
                    <slot>I am fallback content</slot>
            </div>
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-otro-slot-complejo': OtroSlotComplejo;
    }
}
