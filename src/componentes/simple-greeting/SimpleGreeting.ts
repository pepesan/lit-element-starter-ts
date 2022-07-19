import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {

    static override styles = css`
    
  `;

    @property({type: Number})
    aNumber = 5;

    override render() {
        return html`
      <h1>Mi first Lit Element</h1>
      <h2>Number: ${this.aNumber}</h2>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'simple-greeting': SimpleGreeting;
    }
}
