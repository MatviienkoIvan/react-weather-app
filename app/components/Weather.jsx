var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var weatherAPI = require("openWeatherAPI");

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    };
  },
  handleSearch: function (location) {
    this.setState({ isLoading: true });
    weatherAPI
      .getTemp(location)
      .then((temp) => this.setState({ location, temp }))
      .catch((err) => alert(err))
      .finally(() => this.setState({ isLoading: false }));
  },
  render: function () {
    var { isLoading, temp, location } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  },
});

module.exports = Weather;
