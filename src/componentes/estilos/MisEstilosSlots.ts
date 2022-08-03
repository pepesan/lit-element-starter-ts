import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('mis-estilos-slots')
export class MisEstilosSlots extends LitElement {

    static override styles = css`
      ::slotted(*) { background-color: lightgray; }
      ::slotted(p) { color: blue; }
      div ::slotted(*) { color: red; }
    `;


    override render() {
        return html`
            <slot></slot>
            <div><slot name="hi"></slot></div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mis-estilos-slots': MisEstilosSlots;
    }
}
