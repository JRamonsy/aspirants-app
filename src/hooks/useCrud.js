import axios from "axios"
import { useState } from "react"

const useCrud = (BASE_URL) => {
    const [response, setResponse] = useState()

    const getApi = (path) => {
        const url = `${BASE_URL}${path}`
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    const postApi = (path, data) => {
        const url = `${BASE_URL}${path}`        
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            setResponse([...response, res.data])
        })
        .catch(err => console.log(err))
    }

    const deleteApi = (path, id) => {
        const url = `${BASE_URL}${path}${id}/`       
        axios.delete(url) 
        .then(res => {
            console.log(res.data)
            setResponse(response.filter(info => info.id !== id))
        })
        .catch(err => console.log(err))
    }

    const updateApi = (path, id, data) => {
        const url = `${BASE_URL}${path}${id}/` 
        axios.put(url, data)   
        .then(res => {
            console.log(res.data)
            setResponse(response.map(info => info.id === id? res.data : info))
        })
        .catch(err => console.log(err))    
    }

    return [response, getApi, postApi, deleteApi, updateApi]

}

export default useCrud
