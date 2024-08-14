const urla = 'https://jsonplaceholder.typicode.com/todos/';
const urlb = "https://jsonplaceholder.typicode.com/posts/";
export function feRecSing(a, env) {
    if (env === 'prod') {
        return fetch(urla + a);
    } else {
        return fetch(urlb + a);
    }

}