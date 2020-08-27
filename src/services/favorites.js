import Xhrservice from './xhr';

const endpoint = "http://localhost:4000/favorites";

const favorites = {
    addNew: (movie) => {
        return Xhrservice.Post(endpoint, movie);
    },
    getAll: () => {
        Xhrservice.basePath = "http://localhost:4000";
        Xhrservice.apiKey = "";
        return Xhrservice.Get("/favorites");
    }
}

export default favorites;