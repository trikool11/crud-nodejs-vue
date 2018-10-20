import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:8085'

const header = {
    'Content-Type': 'application/json'
}

if(localStorage.token) {
    header.Authorization = 'Beare ' + localStorage.token
}

export default axios.create({
    baseURL: API_URL,
    headers: header
})