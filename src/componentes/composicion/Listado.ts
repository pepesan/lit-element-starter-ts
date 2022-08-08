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
        const formulario = e.target as HTMLFormElement;
        console.log(formulario);
        const primerInput = formulario.children[0] as HTMLInputElement;
        console.log(primerInput.localName);
        console.log(primerInput.value);
        // no podemos enviar el dato al padre, ya que este método se ejecuta desde el hijo
        //this.addItemByString(primerInput.value);
    }
    private _loginListener(e: CustomEvent) {
        console.log("captura evento desde listado");
        this.addItemByString(e.detail.name);
    }
    addItemByString(name: string)
    {
        this.myarray = this.myarray.concat([name]);
    }

    addItem()
    {
        this.myarray = this.myarray.concat(["added"]);
    }
    override render() {
        return html`
      <h1>Listado</h1>
      <p @mylogin=${this._loginListener}>
        <slot></slot>
      </p>
      
            
          <p><button @click="${this.addItem}" >Add</button></p>
      <ul>
          ${this.myarray.map((cadena) =>
                  html`<mi-detalle item="${cadena}">
                      
                  </mi-detalle>`
          )}
      </ul>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-listado': Listado;
    }
}
