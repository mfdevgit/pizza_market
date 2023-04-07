import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mfdevbackbone.vercel.app'
})

export default instance
