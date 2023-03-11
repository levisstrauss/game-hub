
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6fdb644fea534fc8824692bf52d93d5a'
    }
})
