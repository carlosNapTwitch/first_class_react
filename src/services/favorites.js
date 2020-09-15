import Xhrservice from './xhr';
import configUrl from './config';

const endpoint = '/favorites';



const favorites = {
    addNew: (movie) => {
        return Xhrservice.Post(`${configUrl.backEndUrl}${endpoint}`, movie);
    },
    getAll: () => {
        console.log(configUrl.backEndUrl)
        Xhrservice.basePath = configUrl.backEndUrl;
        Xhrservice.apiKey = "";
        return Xhrservice.Get(endpoint);
    }
}

export default favorites;