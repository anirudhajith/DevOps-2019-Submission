import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting';
import Info from './Info';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      submitted: false,
      submitting: false,
      notFound: false,
      city: "",
      temperature: 0,
      humidity: 0
    };
  }

  render() {

    if (!this.state.submitted) {
      return (
        <Greeting
          onSubmit={this.submit.bind(this)}
          notFound={this.state.notFound}
          submitting={this.state.submitting}
        />
      );
    } else {
      return (
        <Info
          city={this.state.city}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          onReturn={this.back.bind(this)}
        />
      );
    }

  }

  makeRequest = function (url) {
    return fetch(url)
      .then((res) => res.json());
  }.bind(this);

  submit = function (city) {

    this.setState({
      submitting: true,
      notFound: false
    });


    const apiKey = 'd3cf9c85464e89ef7a7d75625c9ce4bd';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    console.log(url);
    const app = this;

    this.makeRequest(url)
      .then(function (json) {
        console.log(json);

        if (json.cod == 200) {
          console.log("updating state...");

          app.setState({
            submitted: true,
            submitting: false,
            notFound: false,
            city: json.name,
            temperature: json.main.temp,
            humidity: json.main.humidity
          });


        } else if (json.cod == 404) {
          console.log("Invalid city");
          app.setState({
            notFound: true,
            submitting: false
          })
        }
      })
      .catch(function (error) {
        console.log("ERROR: ", error);
      });

    /*


    if (json.cod === "200") {
      this.setState({
        submitted: true,
        city: json.name,
        temperature: json.main.temp,
        humidity: json.main.humidity
      });
    }
*/


  }.bind(this);

  back = function () {
    this.setState({
      submitted: false,
      notFound: false,
      city: "",
      temperature: 0,
      humidity: 0
    })
  }.bind(this);


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
