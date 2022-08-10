/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MyHttpRequest} from '../componentes/httprequest/MyHttpRequest';

import {fixture,assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}


suite('my-element', () => {
  test('is defined', () => {
    const el = document.createElement('my-http-request');
    assert.instanceOf(el, MyHttpRequest);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<my-http-request></my-http-request>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Mi Http Request</h1>
      <ul>
      </ul>
      <slot></slot>
    `
    );
  });

    test('renders with a set name', async () => {
      const el = await fixture(html`<my-http-request name="Test"></my-http-request>`);
      await delay(3000);
      assert.shadowDom.equal(
        el,
        `
        <!---->
      <h1>Mi Http Request</h1>
      <ul>
          <!--?lit$7431029216$--><!----><li>
                           <p><span><!--?lit$7431029216$-->PP: <!--?lit$7431029216$-->89</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-pp.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->PSOE: <!--?lit$7431029216$-->120</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-psoe.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->Podemos: <!--?lit$7431029216$-->35</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-podemos.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->Vox: <!--?lit$7431029216$-->52</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-vox.jpeg"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->Ciudadanos: <!--?lit$7431029216$-->10</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-ciudadanos.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->ERC: <!--?lit$7431029216$-->13</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-erc.jpg"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->Jpc: <!--?lit$7431029216$-->8</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-ciu.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->PNV: <!--?lit$7431029216$-->6</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-pnv.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->Bildu: <!--?lit$7431029216$-->5</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-bildu.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->NAplus: <!--?lit$7431029216$-->2</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-naplus.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->Cup: <!--?lit$7431029216$-->2</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-cup.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->CC: <!--?lit$7431029216$-->2</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-cc.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->MasPais: <!--?lit$7431029216$-->3</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-mas-pais.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->PRC: <!--?lit$7431029216$-->1</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-prc.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->TeruelExiste: <!--?lit$7431029216$-->1</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-teruel-existe.png"></p>
                          </li><!----><!----><li>
                           <p><span><!--?lit$7431029216$-->BNG: <!--?lit$7431029216$-->1</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-bng.png"></p>
                          </li><!---->
          <!--
              function (item:string){
                  return html item;
              }
          
          -->
      </ul>
      <slot></slot>
      `
      );
    });
  /*
      test('handles a click', async () => {
        const el = (await fixture(html`<my-http-request></my-http-request>`)) as MyHttpRequest;
        const button = el.shadowRoot!.querySelector('button')!;
        button.click();
        await el.updateComplete;
        assert.shadowDom.equal(
          el,
          `
          <h1>Hello, World!</h1>
          <button part="button">Click Count: 1</button>
          <slot></slot>
        `
        );
      });

      test('styling applied', async () => {
        const el = (await fixture(html`<my-http-request></my-http-request>`)) as MyHttpRequest;
        await el.updateComplete;
        assert.equal(getComputedStyle(el).paddingTop, '16px');
      });

       */
});
