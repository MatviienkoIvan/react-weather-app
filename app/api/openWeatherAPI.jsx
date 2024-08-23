var axios = require("axios");

const OPEN_WEATHER_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial";

const URL_API_KEY = "appid=07058267c1cec4b93fc211bfba813c79";
// https://api.openweathermap.org/data/2.5/weather?q=Opole&appid=07058267c1cec4b93fc211bfba813c79

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_URL}&${URL_API_KEY}&q=${encodedLocation}`;

    return axios
      .get(requestUrl)
      .then((response) => {
        if (response.data.cod && response.data.message) {
          throw new Error(response.data.message);
        } else {
          return ((response.data.main.temp - 32) / 1.8).toFixed(1);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};
