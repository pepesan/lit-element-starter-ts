import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mi-slot-simple')
export class SlotSimple extends LitElement {

    static override styles = css`
    
  `;

    @property({type: Number})
    aNumber = 5;

    override render() {

        return  html`
            <div>
                <h5>Título</h5>
                <slot></slot>
            </div>
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-slot-simple': SlotSimple;
    }
}
