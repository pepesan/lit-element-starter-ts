/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mis-eventos')
export class MisEventos extends LitElement {

    @property({type: Number})
    count = 0;
    static override styles = css`
    
  `;
    private _increment(e: Event) {
        e.preventDefault()
        this.count++;
    }

    override render() {
        return html`
      <h1>Mis eventos</h1>
      <p><button @click="${this._increment}">Click Me!</button></p>
      <p>Click count: ${this.count}</p>
      <slot></slot>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'mis-eventos': MisEventos;
    }
}
