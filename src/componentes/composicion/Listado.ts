import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "./Detalle";
import "./Form";

@customElement('mi-listado')
export class Listado extends LitElement {

    static override styles = css`
    
  `;

    @property({type: Array})
    myarray = [
        "hola",
        "mundo"
    ];
    manejaSubmit(e: Event){
        e.preventDefault();
        console.log("Listado: " + e.target)
    }

    override render() {
        return html`
      <h1>Listado</h1>
      <mi-form aText="Texto inicial" .onSubmit="${this.manejaSubmit}">
          
      </mi-form>
      <ul>
          ${this.myarray.map((cadena) =>
                  html`<mi-detalle item="${cadena}">
                      
                  </mi-detalle>`
          )}
      </ul>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-listado': Listado;
    }
}
