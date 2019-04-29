import React from "react";

import WeatherSection from "../sections/weather-section";
import MovieSection from "../sections/movie-section";
import YelpSection from "../sections/yelp-section";
import MeetupSection from "../sections/meetup-section";
import TrailSection from "../sections/trail-section";

let superagent = require("superagent");

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
  }
  setLocation = e => {
    this.setState({ location: e.target.value });
  };
  submitButton = e => {
    e.preventDefault();
    this.getData();
  };
  getData = () => {
    superagent
      .get("https://city-explorer-backend.herokuapp.com/location")
      .query(`data=${this.state.location}`)
      .then(location => {
        this.setState({ map: location });
        this.getResource("weather", this.state.map.body);
        this.getResource("movies", this.state.map.body);
        this.getResource("yelp", this.state.map.body);
        this.getResource("meetups", this.state.map.body);
        this.getResource("trails", this.state.map.body);
      });
  };
  getResource = (resource, location) => {
    superagent
      .get(`https://city-explorer-backend.herokuapp.com/${resource}`, {
        data: location
      })

      .then(result => {
        this.setState({ [resource]: result });
      });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>City Explorer</h1>
          <p>
            Enter a location below to learn about the weather, events,
            restaurants, movies filmed there, and more!
          </p>
        </header>
        <main>
          <form id="search-form">
            <label>Search for a location</label>
            <input
              type="text"
              name="search"
              id="input-search"
              onChange={this.setLocation}
              placeholder="Enter a location here"
            />
            <button onClick={this.submitButton}>Explore!</button>
          </form>
          {this.state.map &&
          this.state.map.body.latitude &&
          this.state.map.body.longitude ? (
            <img
              id="map"
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${
                this.state.map.body.latitude
              }%2c%20${
                this.state.map.body.longitude
              }&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCYm2S_FyENayp5ssHD_aD0zjhO2fM9EK8`}
              alt="Map of search query"
            />
          ) : (
            ""
          )}
          {this.state.map ? (
            <h2 className="query-placeholder">
              Here are the results for {this.state.map.body.formatted_query}
            </h2>
          ) : (
            ""
          )}
          <section className="error-container" />

          <div className="column-container">
            {this.state.weather ? (
              <WeatherSection data={this.state.weather.body} />
            ) : (
              ""
            )}
            {this.state.yelp ? <YelpSection data={this.state.yelp.body} /> : ""}
            {this.state.meetups ? (
              <MeetupSection data={this.state.meetups.body} />
            ) : (
              ""
            )}
            {this.state.movies ? (
              <MovieSection data={this.state.movies.body} />
            ) : (
              ""
            )}
            {this.state.trails ? (
              <TrailSection data={this.state.trails.body} />
            ) : (
              ""
            )}
          </div>
          {/* <Column /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default Mainpage;
