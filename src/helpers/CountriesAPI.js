import axios from "axios";

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
});

export default {
    getAllCountries: async () => {
        let {data: json} = await api.get(`/all`);
        return json;
    },
    getCountriesRegion: async (region) => {
        let {data: json} = await api.get(`/region/${region}`);
        return json;
    },
    getCountriesCapital: async (capital) => {
        let {data: json} = await api.get(`/capital/${capital}`);
        return json;
    },
    getCountriesLang: async (et) => {
        let {data: json} = await api.get(`/lang/${et}`);
        return json;
    },
    getCountriesName: async (name) => {
        let {data: json} = await api.get(`/name/${name}
        `);
        return json;
    }
}