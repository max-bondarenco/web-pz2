import axios from 'axios'

const baseURL = 'https://web-pz2.onrender.com'

export default axios.create({
    baseURL,
})
