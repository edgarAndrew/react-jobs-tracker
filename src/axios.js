import axios from 'axios';
const productionURL = "http://localhost:5000/api/v1"
const developmentURL = "https://jobs-tracker-7o5a.onrender.com/api/v1"

axios.defaults.baseURL = developmentURL;

axios.interceptors.request.use(function (req) {
  const user = localStorage.getItem('user');

  if (user) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
