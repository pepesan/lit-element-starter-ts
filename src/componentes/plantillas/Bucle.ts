import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mi-bucle')
export class Bucle extends LitElement {

    static override styles = css`
    
  `;

    @property() colors = ['red', 'green', 'blue'];

    override render() {
        return html`
            <ul>
                ${this.colors.map(
                    // parámetro de entrada
                    (item) => // arrow o flecha (arrow function o lambdas)
                        html`<li style="color: ${item}">Color: ${item}</li>` // sentencias de la función
                        // esto es com un return de lo que devulve html``
                )}
                <!--
                    function (item:string){
                        return html item;
                    }
                
                -->
            </ul>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-bucle': Bucle;
    }
}
