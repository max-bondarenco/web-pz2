import axios from 'axios'

const baseURL = 'https://web-pz2.onrender.com/api'

export default axios.create({
    baseURL,
})
