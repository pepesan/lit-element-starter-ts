/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mis-eventos-captura')
export class MisEventosPersonalizadosCaptura extends LitElement {

    @property() name = '';
    protected override render() {
        return html`
      <p @mylogin=${this._loginListener}><slot></slot></p>
      <p>Login: ${this.name}</p>`;
    }
    private _loginListener(e: CustomEvent) {
        this.name = e.detail.name;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'mis-eventos-captura': MisEventosPersonalizadosCaptura;
    }
}
