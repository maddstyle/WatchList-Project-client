import axios from "axios";


const api = axios.create({
  baseUrl: "http://localhost:3001"
});

export default api;

/**
 * @get api.get('routename')
 * @post api.post('createUser')
 * @same folder ./services
 * @exitFolder ../App
 */