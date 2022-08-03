import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {estilosExternos} from './estilosExternos'

@customElement('carga-estilos')
export class CargaEstilos extends LitElement {

    static override styles = [
      estilosExternos,
      css`
          p {
            color: green;
          }
      `
    ];

    override render() {
        return html`
            <div>
                <p>
                    <button class="blue-button">Boton</button>
                    <button class="blue-button" disabled >Boton</button>
                </p>
            </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'carga-estilos': CargaEstilos;
    }
}
