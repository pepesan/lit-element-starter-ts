import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


interface User {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

@customElement('my-http-request-v2')
export class MyHttpRequestV2 extends LitElement {

    static override styles = css`
  `;

    @property({type: Object})
    usuario: User= {
        completed: false,
        id: 1,
        title: "",
        userId: 1
    };

    constructor() {
        super();

    }



    async load() {
        const myRequest = fetch('https://jsonplaceholder.typicode.com/todos/1');
        myRequest.then(async response => {
            console.log(response);
            const miJson = await response.json();
            console.log(miJson);
        })
            .catch(error => {
                console.log(error);
            })
    }
    private clicked = () => {
        this.load();
    };
    private clickedPost = () => {

        const myRequest = fetch('https://jsonplaceholder.typicode.com/posts',{
            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        // Converting to JSON
        myRequest.then(async response =>{
            const resJson = await response.json()
            console.log(resJson)
        } );
        // Displaying results to console
        myRequest.catch(error => console.log(error));

    };
    override render() {
        return html`
      <h1>Mi Http Request</h1>
      <p><button id="http-load" @click="${this.clicked}">Load Get</button></p>
      <p><button id="http-load-post" @click="${this.clickedPost}">Load Post</button></p>
      <div>
          <p>${this.usuario.userId}</p>
      </div>
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-http-request-v2': MyHttpRequestV2;
    }
}
