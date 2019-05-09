import React from 'react';
import Timer from './Timer';
import Input from './Input';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            hours: "0",
            minutes: "0",
            seconds: "0",
            counting: false
        }
    }

    render() {
        var element;
        
        if (this.state.counting) {
            element = <Timer hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
        } else {
            element = <Input submitFunction={this.startCounting.bind(this)} />
        }

        return element;
    }

    startCounting = function(hours, minutes, seconds) {
        hours = hours.toString();
        minutes = (minutes >= 10) ? minutes.toString() : "0" + minutes.toString();
        seconds = (seconds >= 10) ? seconds.toString() : "0" + seconds.toString()
        this.setState({
            counting: true,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }.bind(this);
}

export default App;