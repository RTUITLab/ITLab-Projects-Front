import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:5506/api/projects",
  responseType: 'json',
});
