
import { create } from 'apisauce'

const apiClient = create({
    baseURL: 'http://172.20.10.3:8080/api/'
})

export default apiClient