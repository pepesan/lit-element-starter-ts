import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Highlightable} from './Highlightable.js'

@customElement('element-one')
export class ElementOne extends Highlightable(LitElement) {
    override render(){
        return this.renderHighlight(html`<p>Simple highlight</p>`);
    }
}
