import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from "lit/decorators";
import {repeat} from "lit/directives/repeat.js";

@customElement('mi-tabla-slot-complejo')
export class OtroSlotComplejo extends LitElement {

    @property()
    items: Array<{id: number, name: string}> = [
        {
            id: 2,
            name: "Pepe"
        },
        {
            id: 3,
            name: "Estela"
        },
    ];

    override render() {
        return html`
      <table>
        <tr>
          <th>     <slot name="cabeza"></slot></th>
        </tr>
        
        ${repeat(
            this.items,
            (item) =>
                html`<tr><td>${item.id}: ${item.name}</td></tr>`
        )}
  
        <tr>
          <td>     <slot name="pie"></slot></td>
        </tr>
      </table>
      `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'mi-tabla-slot-complejo': OtroSlotComplejo;
    }
}
