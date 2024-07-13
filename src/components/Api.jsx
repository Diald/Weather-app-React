import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "0cbacf8237f429038b69e495a50fab5b",
  },
});

export default api;
