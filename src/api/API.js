import axios from 'axios';

export default axios.create({
  baseURL: localStorage.getItem('projectsAPIUrl'),
  responseType: 'json',
});
