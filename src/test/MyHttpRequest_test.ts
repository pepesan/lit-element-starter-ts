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

const sleepTime = 2000;


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

    test('renders with all the data', async () => {
      const el = await fixture(html`<my-http-request name="Test"></my-http-request>`);
      await delay(sleepTime);
      assert.shadowDom.equal(
        el,
        `
        <!---->
      <h1>Mi Http Request</h1>
      <ul>
          <!--?lit$7431029216$--><!----><li id="partido-PP">
                           <p><span><!--?lit$7431029216$-->PP: <!--?lit$7431029216$-->89</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-pp.png"></p>
                          </li><!----><!----><li id="partido-PSOE">
                           <p><span><!--?lit$7431029216$-->PSOE: <!--?lit$7431029216$-->120</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-psoe.png"></p>
                          </li><!----><!----><li id="partido-Podemos">
                           <p><span><!--?lit$7431029216$-->Podemos: <!--?lit$7431029216$-->35</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-podemos.png"></p>
                          </li><!----><!----><li id="partido-Vox">
                           <p><span><!--?lit$7431029216$-->Vox: <!--?lit$7431029216$-->52</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-vox.jpeg"></p>
                          </li><!----><!----><li id="partido-Ciudadanos">
                           <p><span><!--?lit$7431029216$-->Ciudadanos: <!--?lit$7431029216$-->10</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-ciudadanos.png"></p>
                          </li><!----><!----><li id="partido-ERC">
                           <p><span><!--?lit$7431029216$-->ERC: <!--?lit$7431029216$-->13</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-erc.jpg"></p>
                          </li><!----><!----><li id="partido-Jpc">
                           <p><span><!--?lit$7431029216$-->Jpc: <!--?lit$7431029216$-->8</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-ciu.png"></p>
                          </li><!----><!----><li id="partido-PNV">
                           <p><span><!--?lit$7431029216$-->PNV: <!--?lit$7431029216$-->6</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-pnv.png"></p>
                          </li><!----><!----><li id="partido-Bildu">
                           <p><span><!--?lit$7431029216$-->Bildu: <!--?lit$7431029216$-->5</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-bildu.png"></p>
                          </li><!----><!----><li id="partido-NAplus">
                           <p><span><!--?lit$7431029216$-->NAplus: <!--?lit$7431029216$-->2</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-naplus.png"></p>
                          </li><!----><!----><li id="partido-Cup">
                           <p><span><!--?lit$7431029216$-->Cup: <!--?lit$7431029216$-->2</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-cup.png"></p>
                          </li><!----><!----><li id="partido-CC">
                           <p><span><!--?lit$7431029216$-->CC: <!--?lit$7431029216$-->2</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-cc.png"></p>
                          </li><!----><!----><li id="partido-MasPais">
                           <p><span><!--?lit$7431029216$-->MasPais: <!--?lit$7431029216$-->3</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-mas-pais.png"></p>
                          </li><!----><!----><li id="partido-PRC">
                           <p><span><!--?lit$7431029216$-->PRC: <!--?lit$7431029216$-->1</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-prc.png"></p>
                          </li><!----><!----><li id="partido-TeruelExiste">
                           <p><span><!--?lit$7431029216$-->TeruelExiste: <!--?lit$7431029216$-->1</span> <img src="https://cursosdedesarrollo.com/pactometro/img/logotipo-teruel-existe.png"></p>
                          </li><!----><!----><li id="partido-BNG">
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

      test('handles the list', async () => {
        const el = (await fixture(html`<my-http-request></my-http-request>`)) as MyHttpRequest;
        const ul = el.shadowRoot!.querySelector('ul')!;
        await delay(sleepTime);
        await el.updateComplete;
        assert.equal(
          ul.children.length,
          16
        );
      });
      test('handles the list items', async () => {
        const el = (await fixture(html`<my-http-request></my-http-request>`)) as MyHttpRequest;
        await delay(sleepTime);
        await el.updateComplete;
        const pp = el.shadowRoot!.querySelector('li#partido-PP')!;
        // console.log("li#partido-PP: "+ pp);
        assert.equal(
            pp.id,
            "partido-PP"
        );
      });

        test('styling applied', async () => {
          const el = (await fixture(html`<my-http-request></my-http-request>`)) as MyHttpRequest;
          await delay(sleepTime);
          await el.updateComplete;
          const ppImg = el.shadowRoot!.querySelector('li#partido-PP img')!;
          // console.log("li#partido-PP img: "+ ppImg);
          assert.equal(getComputedStyle(ppImg).width, '100px');
        });
  test('img src applied', async () => {
    const el = (await fixture(html`<my-http-request></my-http-request>`)) as MyHttpRequest;
    await delay(sleepTime);
    await el.updateComplete;
    const ppImg = el.shadowRoot!.querySelector('li#partido-PP img')! as HTMLImageElement;
    // console.log("li#partido-PP img: "+ ppImg);
    assert.equal(ppImg.src, "https://cursosdedesarrollo.com/pactometro/img/logotipo-pp.png");
  });


});
