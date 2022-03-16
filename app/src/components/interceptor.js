import axios from 'axios';
const BASE_URL = 'http://localhost:3000'

export default async function interceptor(type, url, data = {}) {
    let res
    switch(type) {
      case 'get':
        res = await axios.get(`${BASE_URL}/${url}`)
        return res.data;
      case 'post':
        res = await axios.post(`${BASE_URL}/${url}`, data)
        return res?.data?.code ? res?.data?.code : res.data._id;
      case 'delete':
        res = await axios.delete(`${BASE_URL}/${url}`, data)
        return res.data;
      default:
        res = await axios.patch(`${BASE_URL}/${url}`, data)
        return res?.data?.code ? res?.data?.code : res.data._id;
        //return res.data;
    }
}
