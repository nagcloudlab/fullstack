
import { create } from 'apisauce'
import cache from "../utility/cache";


const apiClient = create({
    baseURL: 'http://13.233.247.242:8080/api/'
})

const get = apiClient.get; // orignal apisauce get method reference

// proxy / around-execute pattern
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);
    if (response.ok) {
        cache.store(url, response.data); // cache
        return response;
    }
    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
};



export default apiClient