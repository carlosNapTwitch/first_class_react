class XhrService {
    constructor() {
        this.basePath = 'https://api.themoviedb.org/3';
        this.apiKey = '?api_key=e43c483569b04a82486e7edda4f72d22'
    }

    async Get(endpoint, queryParams) {
        const finalUrl = `${this.basePath}${endpoint}${this.apiKey}${queryParams}`
        const response = await fetch(finalUrl);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
}

export default new XhrService();