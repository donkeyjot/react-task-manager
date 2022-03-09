import Axios from 'axios'

function returnAxiosInstance() {
    return Axios.create({
        baseURL: 'http://localhost:5555/api',
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export function getAll(url: string, filter?: boolean): Promise<any> {
    const axios = returnAxiosInstance()
    return axios.get(url, {params: filter});
}

export function get(url: string, id: string): Promise<any> {
    const axios = returnAxiosInstance()
    return axios.get(`${url}/${id}`)
}

export function create(url: string, data: any): Promise<any> {
    const axios = returnAxiosInstance()
    return axios.post(`${url}/add`, data)
}

export function find(url: string, query: string, by: string = 'name'): Promise<any> {
    const axios = returnAxiosInstance()
    return axios.get(`${url}?=${by}=${query}`)
}

export function update(url: string, id: string, data: any): Promise<any> {
    const axios = returnAxiosInstance()
    return axios.put(`${url}/${id}`, data)
}

export function remove(url: string, id: string): Promise<any> {
    const axios = returnAxiosInstance()
    return axios.delete(`${url}/${id}`)
}

