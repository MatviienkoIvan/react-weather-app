var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var ErrorModal = require("ErrorModal");
var weatherAPI = require("openWeatherAPI");

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  handleSearch: function (location) {
    this.setState({ 
      isLoading: true, 
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    weatherAPI
      .getTemp(location)
      .then((temp) => this.setState({ location, temp }))
      .catch((err) => this.setState({ errorMessage: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  },

  componentDidMount: function(location) {
    var location = this.props.location.query.location;
    
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function () {
    var { errorMessage, isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    };

    function renderError() {
      if (typeof errorMessage === 'string') {
        return( <ErrorModal message={errorMessage}/>);
      }
    };

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  },
});

module.exports = Weather;
