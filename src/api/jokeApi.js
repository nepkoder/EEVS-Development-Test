const BASE_URL = 'https://api.chucknorris.io/jokes/';

export default class JokeApi {

    static getCategories(endpoint) {
        fetch(endpoint).then(res => res.json()).then(result => {
            return result;
        }).catch(error => console.log(error));
    }

    static getRandomJoke(category) {
        let randomCategory = BASE_URL + `random?category=${category}`;
        fetch(randomCategory).then(res => res.json()).then(result => {
            return result;
        }).catch(err => err);
    }

    static getSearchQuery(query) {
        let searchUrl = BASE_URL + `search?query=${query}`;
        fetch(searchUrl).then(res => res.json())
            .then(result => {
                return result;
            }).catch(err => err);
    }

}