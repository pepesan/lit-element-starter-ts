import {Post} from "./Post";

export class ApiRestClient{
    async load(): Promise<Post> {
        const myRequest = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await myRequest.json();
    }
}