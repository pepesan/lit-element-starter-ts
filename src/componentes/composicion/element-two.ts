import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Highlightable} from './Highlightable.js'

const HighlightableLitElement = Highlightable(LitElement);

@customElement('element-two')
export class ElementTwo extends HighlightableLitElement {
    static override styles = [
        HighlightableLitElement.styles || [],
        css`:host { display: block; }`
    ];

    override render(){
        return this.renderHighlight(html`
      <label>
        <input type="checkbox"
          .checked=${this.highlight}
          @change=${this.toggleHighlight}>
        Toggleable highlight
      </label>
    `);
    }
    private toggleHighlight(event: Event) {
        this.highlight = (event.target as HTMLInputElement).checked;
    }
}