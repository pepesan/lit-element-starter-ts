import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ApiRestClient} from "./ApiRestClient";
import {Post} from "./Post";



@customElement('my-http-request-v2')
export class MyHttpRequestV2 extends LitElement {

    static override styles = css`
  `;

    public apiRestClient: ApiRestClient;

    @property({type: Object})
    post: Post= {
        completed: false,
        id: 0,
        title: "",
        userId: 0
    };

    constructor() {
        super();
        this.apiRestClient = new ApiRestClient();
    }




    private clicked = () => {
        const result = this.apiRestClient.load();
        result.then((data) => {
            this.post = data;
            console.log(this.post);
        })
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
          <p>${this.post.userId}</p>
          <p>${this.post.title}</p>
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
