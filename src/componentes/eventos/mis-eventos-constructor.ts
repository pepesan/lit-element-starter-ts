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
@customElement('mis-eventos-constructor')
export class MisEventosConstructor extends LitElement {

    @property() hostName = '';
    @property() shadowName = '';
    constructor() {
        super();
        this.addEventListener('click',
            (e: Event) => this.hostName = (e.target as Element).localName);
    }
    protected override createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener('click',
            (e: Event) => this.shadowName = (e.target as Element).localName);
        return root;
    }
    protected override render() {
        return html`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'mis-eventos-constructor': MisEventosConstructor;
    }
}
