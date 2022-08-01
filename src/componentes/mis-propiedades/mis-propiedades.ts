/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mis-propiedades')
export class MisPropiedades extends LitElement {
  static override styles = css`
    
  `;

  /**
   * Propiedad pública se puede usar en la plantilla
   */
  @property()
  name = 'World';

  /**
   * Propiedad con definición de tipo de dato
   */
  @property({type: String})
  cadena :String = "";


  /**
   * Propiedad con definición de estado (update de vista automático)
   */
  @property({state: true})
  miEstado = 'miCadena';
  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  /*
    Definición de una variable de estado
   */
  @state()
  protected _active = false;

  constructor() {
    super();
    // initialize the properties
    //this.cadena = "Cadena";
  }

  override render() {
    return html`
      <h1>Nombre: ${this.name}</h1>
      <h2>Cadena: ${this.cadena}</h2>
      <h2>Estado: ${this.miEstado}</h2>
      <h2>_Active: ${this._active}</h2>
      <slot></slot>
    `;
  }


  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mis-propiedades': MisPropiedades;
  }
}
