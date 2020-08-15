import Xhrservice from './xhr';

const endpoint = '/search/movie';

const movies = {
    search: (query) => {
        return Xhrservice.Get(endpoint, `&query=${query}`);
    }
}

export default movies;