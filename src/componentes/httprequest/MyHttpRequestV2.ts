import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

interface Partido{
    dipu: string;
    imagen: string;
    nombre: string
}

@customElement('my-http-request-v2')
export class MyHttpRequestV2 extends LitElement {

    static override styles = css`
      img{
        width: 100px;
      }
  `;

    @property({type: Object})
    partidos: Partido[] = [];


    constructor() {
        super();

    }



    async load() {
        const response = await fetch('https://cursosdedesarrollo.com/pactometro/resultados.json');
        this.partidos = await response.json();
        //console.log(this.partidos);
    }
    private clicked = () => {
        this.load();
    };
    override render() {
        return html`
      <h1>Mi Http Request</h1>
      <p><button id="http-load" @click="${this.clicked}">Load</button></p>
      <ul>
          ${this.partidos.map(
                  // parámetro de entrada
                  (item) => // arrow o flecha (arrow function o lambdas)
                          html`<li id="partido-${item.nombre}">
                           <p><span>${item.nombre}: ${item.dipu}</span> <img src="https://cursosdedesarrollo.com/pactometro/img/${item.imagen}"/></p>
                          </li>` // sentencias de la función
                  // esto es com un return de lo que devulve html``
          )}
          <!--
              function (item:string){
                  return html item;
              }
          
          -->
      </ul>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-http-request-v2': MyHttpRequestV2;
    }
}
