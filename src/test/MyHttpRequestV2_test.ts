/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MyHttpRequestV2} from '../componentes/httprequest/MyHttpRequestV2';

import {fixture,assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';


function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

const sleepTime = 2000;




suite('my-http-request-v2', () => {
  test('is defined', () => {
    const el = document.createElement('my-http-request-v2');
    assert.instanceOf(el, MyHttpRequestV2);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<my-http-request-v2></my-http-request-v2>`);
    assert.shadowDom.equal(
      el,
      `<h1>
        Mi Http Request
      </h1>

       <p>
        <button id="http-load">
          Load Get
        </button>
      </p>
      <p>
        <button id="http-load-post">
          Load Post
        </button>
      </p>
      <div>
        <p>
          1
        </p>
      </div>
      <slot></slot>
    `
    );
  });

      test('renders with all the data', async () => {
        const el = await fixture(html`<my-http-request-v2 name="Test"></my-http-request-v2>`);
        const button = el.shadowRoot!.querySelector('button#http-load')! as HTMLButtonElement;
        button.click();
        await delay(sleepTime);
        assert.shadowDom.equal(
          el,
          `
          <h1>
        Mi Http Request
      </h1>

       <p>
        <button id="http-load">
          Load Get
        </button>
      </p>
      <p>
        <button id="http-load-post">
          Load Post
        </button>
      </p>
      <div>
        <p>
          1
        </p>
      </div>
      <slot></slot>
        `
        );
      });

});
