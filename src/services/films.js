import serviceConfig from './config';

const films = {
    getAll: async (params) => {
        const result = await fetch(`${serviceConfig.baseUrl}/films/${params}`);
        const { results } = await result.json();
        return results;
    }
}

export default films;