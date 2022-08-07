import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {when} from 'lit/directives/when.js';

@customElement('mi-when')
export class When extends LitElement {

    static override styles = css`
    
  `;

    @property({type: Number})
    aNumber = 2;

    override render() {

        return  html`${
            when(
                this.aNumber == 5, 
                () => html`aNumber: ${this.aNumber}`, 
                () => html`Not five`)
        }`;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-when': When;
    }
}
