import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('mis-plantillas')
export class Plantillas extends LitElement {

    @property({attribute: false})
    article = {
        title: 'My Nifty Article',
        text: 'Some witty text.',
    };

    @property({type: String})
    entradaPresenta: String =  "false";

    @property() colors = ['red', 'green', 'blue'];

    @property()
    sindefinir: String = "";

    static override styles = css`
    
  `;

    headerTemplate() {
        return html`<header>${this.article.title}</header>`;
    }

    articleTemplate() {
        return html`<article>${this.article.text}</article>`;
    }

    footerTemplate() {
        return html`<footer>Your footer here.</footer>`;
    }

    override render() {
        return this.entradaPresenta === "true"

            ? html`<div>
                    <h2>Welcome ${this.article.title}</h2>
                    <p>${this.article.text}</p>
                    <h2>Variable sin definir: ${ifDefined(this.sindefinir)}</h2>
                    ${this.headerTemplate()}
                    ${this.articleTemplate()}
                    ${this.footerTemplate()}
                    <ul>
                        ${this.colors.map((color) =>
                                html`<li style="color: ${color}">Color: ${color}</li>`
                        )}
                    </ul>
                    
                    <slot name="one"></slot>
                </div>
            `

            : html`
                <h2>No hay artículo</h2>
                <slot></slot>
            `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mis-plantillas': Plantillas;
    }
}
