/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mis-eventos-personalizados')
export class MisEventosPersonalizados extends LitElement {

    @query('input', true) _input!: HTMLInputElement;
    protected override render() {
        return html`
      <p>Name: <input></p>
      <p><button @click=${this._dispatchLogin}>Login</button></p>
    `;
    }
    private _dispatchLogin() {
        const name = this._input.value.trim();
        if (name) {
            const options = {
                detail: {name},
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('mylogin', options));
        }
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'mis-eventos-personalizados': MisEventosPersonalizados;
    }
}
