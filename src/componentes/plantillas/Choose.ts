import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {choose} from 'lit/directives/choose.js';

@customElement('mi-choose')
export class Choose extends LitElement {

    static override styles = css`
    
  `;

    @property({type: String})
    section?: string;

    override render() {

        return  html`      ${choose(this.section, [

                    ['home', () => html`<h1>Home</h1>`],

                    ['about', () => html`<h1>About</h1>`]

                ],

                () => html`<h1>Error</h1>`)}
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-choose': Choose;
    }
}
