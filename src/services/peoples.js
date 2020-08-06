import serviceConfig from './config';

const peoples = {
    getAll: async (urlParam = '') => {
        const result = await fetch(`${serviceConfig.baseUrl}/people/${urlParam}`);
        const results = await result.json();
        return results;
    },
}

export default peoples;