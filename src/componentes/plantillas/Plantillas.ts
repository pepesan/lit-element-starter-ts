import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mis-plantillas')
export class Plantillas extends LitElement {

    @property({attribute: false})
    article = {
        title: 'My Nifty Article',
        text: 'Some witty text.',
    };

    @property() colors = ['red', 'green', 'blue'];

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
        return this.article

            ? html`<div>
                    <h2>Welcome ${this.article.title}</h2>
                    <p>${this.article.text}</p>
                    ${this.headerTemplate()}
                    ${this.articleTemplate()}
                    ${this.footerTemplate()}
                    <ul>
                        ${this.colors.map((color) =>
                                html`<li style="color: ${color}">Color: ${color}</li>`
                        )}
                    </ul>
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
