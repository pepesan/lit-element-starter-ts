import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {join} from 'lit/directives/join.js';
import {map} from 'lit/directives/map.js';

@customElement('mi-join')
export class Join extends LitElement {

    static override styles = css`
    
  `;

    @property()
    menuItems: Array<{href: string, label: string}> = [
        {
            href: "#",
            label: "Pepe"
        },
        {
            href: "#",
            label: "Estela"
        },
        {
            href: "#",
            label: "Luisa"
        },
    ];

    override render() {

        return  html`
            ${join(

                    map(this.menuItems, (i) => html`<a href=${i.href}>${i.label}</a>`),

                    html`<span class="separator">|</span>`

            )}
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-join': Join;
    }
}
