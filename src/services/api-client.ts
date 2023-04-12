import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9833fb786d19460f95f68af521d32b01'
    }
})