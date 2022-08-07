import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from "lit/directives/if-defined.js";
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';

@customElement('uso-directivas')
export class DirectivasDefault extends LitElement {

    static override styles = css`
    
  `;

    @property()
    sindefinir?: String;

    @property({type: Boolean})
    enabled = true;

    @property({type: Boolean})
    classEnabled = false;



    override render() {
        // definimos las clases y su valor en booleano para incluirlas o no
        const classes = { enabled: this.enabled, hidden: true };
        const styles = { backgroundColor: this.enabled ? 'blue' : 'gray', color: 'white' };
        return html`
            <h2>Variable sin definir: ${ifDefined(this.sindefinir)}</h2>
            <!-- usamos el classMap con la variable classes -->
            <div class=${classMap(classes)}>Classy text</div>
            <!-- usamos el classMap con la variable classes -->
            <p style=${styleMap(styles)}>Hello style!</p>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'uso-directivas': DirectivasDefault;
    }
}
