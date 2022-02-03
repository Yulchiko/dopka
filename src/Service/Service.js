const baseURL = 'https://loremflickr.com/320/240';

export const urls = {
    car: '/car',
    cat: '/cat',
    Dog: '/dog',
    Girl: '/girl',
    Notebook: '/notebook'

}


export default function ApiService() {
        this.getRandomImage = (instance) => fetch(`${baseURL}/${instance}`).then(response => response.url);
}