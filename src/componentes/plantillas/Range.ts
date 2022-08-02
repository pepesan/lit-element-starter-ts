import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {range} from 'lit/directives/range.js';
import {map} from 'lit/directives/map.js';

@customElement('mi-range')
export class Range extends LitElement {

    static override styles = css`
    
  `;
    @property()
    endRange?: number = 8;
    @property()
    startRange?: number = 4;
    @property()
    stepRange?: number = 2;
    override render() {

        return  html`
            <h4>Range(8)</h4>
            <ul>
            
                ${map(range(this.endRange!), (i) => html`<li>${i + 1}</li>`)}
            </ul>
            <h4>Range(4,8)</h4>
            <ul>
                
                ${map(range(this.startRange!, this.endRange!), (i) => html`<li>${i + 1}</li>`)}
            </ul>
            <h4>Range(4,8,2)</h4>
            <ul>

                ${map(range(this.startRange!, this.endRange!, this.stepRange!), (i) => html`<li>${i + 1}</li>`)}
            </ul>
        `;

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-range': Range;
    }
}
