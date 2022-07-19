import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mis-plantillas')
export class Plantillas extends LitElement {

    @property({attribute: false})
    article = {
        title: 'My Nifty Article',
        text: 'Some witty text.',
    };

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
        return html`
            ${this.headerTemplate()}
            ${this.articleTemplate()}
            ${this.footerTemplate()}
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mis-plantillas': Plantillas;
    }
}
