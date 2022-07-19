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
@customElement('mis-ciclos-de-vida')
export class MisCiclosDeVida extends LitElement {

    @property()
    prop1;
    // Constructor
    constructor() {

        super();

        this.prop1 = 'foo';

    }

    // ConnectedCallback: Método que se llama cuando un componente se añade al DOM
    override connectedCallback() {

        super.connectedCallback();
        console.log("Componente MisCiclosDeVida cargado");

    }
    // DisconnectedCallback: Método que se llama cuando un componente se quita del DOM
    override disconnectedCallback() {

        super.disconnectedCallback();
        console.log("Componente MisCiclosDeVida descargado");

    }

    // attributeChangedCallback() método que se llama cuando se cambia un atributo de observedAttributes
    // adoptedCallback() método que se llama cuando el componente se mueve a un nuevo documento
    // hasChanged() método que se llama cuando se cambia una propiedad reactiva
    // requestUpdate() Planifica un update explícito
    // shouldUpdate() se le llama cada vez que se requiere un ciclo de update
    // update() método que actualiza el DOM del componente
    // willUpdate() se le llama justo antes de update()
    // render() renderiza la plantilla
    // firstUpdated() se le llama después de la primera vez quue se hace un update
    // updated() después del update y el render
    // updateComplete promesa que termina cuando se ha finalizado el update
    // performUpdate() fuerza la actualización
    // hasUpdated propiedad que devuelve si se ha hecho el update al menos usa vez
    // getUpdateComplete() función que define cosas a hacer antes de terminar el updateComplete
    // addController() añade un controlador reactivo al componente
    // addInitializer() similar al constructor
    // removeController elimina un controlador reactivo
    // más info en https://lit.dev/docs/components/lifecycle/

    static override styles = css`
    
  `;



    override render() {
        return html`
      <h1>Ciclos de Vida</h1>
      <h2>Prop1: ${this.prop1}</h2>
      <slot></slot>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'mis-ciclos-de-vida': MisCiclosDeVida;
    }
}
