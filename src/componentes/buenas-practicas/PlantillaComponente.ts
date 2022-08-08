import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {componentStyles} from './PlantillasComponenteStyles';
import {componentTemplate} from "./PlantillasComponenteTemplate";

@customElement('mi-plantilla-componente')
export class PlantillaComponente extends LitElement {

    static override styles = [
        componentStyles,

  ];


    override render() {
        return componentTemplate;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mi-plantilla-componente': PlantillaComponente;
    }
}
