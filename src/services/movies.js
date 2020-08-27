import Xhrservice from './xhr';

const endpoint = '/search/movie';

const movies = {
    search: (query) => {
        Xhrservice.basePath = 'https://api.themoviedb.org/3';
        Xhrservice.apiKey = '?api_key=e43c483569b04a82486e7edda4f72d22'
        return Xhrservice.Get(endpoint, `&query=${query}`);
    }
}

export default movies;