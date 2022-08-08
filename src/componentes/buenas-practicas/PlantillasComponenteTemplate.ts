import {html} from 'lit';

export const componentTemplate = html`
    <h1>Plantilla componente</h1>
    <button class="blue-button">Boton azul</button>
    <slot></slot>
`;