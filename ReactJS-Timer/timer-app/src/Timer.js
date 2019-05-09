import React from 'react';
import './Timer.css';

class Timer extends React.Component {

	constructor() {
		super();
		console.log(this);
		this.state = {
			hours: "0",
			minutes: "00",
			seconds: "00",
			total: 100,
			running: 100,
			alerted: false
		}
    }

    render() {
        var element = (
			<div>
				<div className="time">	
					{this.state.hours}:{this.state.minutes}:{this.state.seconds}
				</div>
				
				<div className="progress">
  					<div className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: (this.state.running * 100) / this.state.total + "%"}}></div>
				</div>

				<div className="toast" role="alert" aria-live="assertive" aria-atomic="true" style={{opacity: this.state.alerted ? 1 : 0}} >
					<div className="toast-header">
						<strong className="mr-auto">Timer</strong>
					</div>
					<div className="toast-body">
						{this.props.hours} hours, {this.props.minutes} minutes and {this.props.seconds} seconds have elapsed!
					</div>
				</div>

			</div>
		);

		return element;
    }

    componentDidMount() {

		var hours = this.props.hours;
		var minutes = this.props.minutes;
		var seconds = this.props.seconds;
		var running = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
		var total = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

        this.setState({
            hours: hours,
            minutes: minutes,
			seconds: seconds,
			running: running,
			total: total
		});

		setInterval(this.decrementTime, 1000);
    }

    componentWillUnmount() {

    }

    decrementTime = function () {
				
        var hours = parseInt(this.state.hours);
        var minutes = parseInt(this.state.minutes);
        var seconds = parseInt(this.state.seconds);

        if (seconds > 0)
            seconds = seconds - 1;
        else if (minutes > 0) {
            minutes = minutes - 1;
            seconds = 59;
        } else if (hours > 0){
            hours = hours - 1;
            minutes = 59;
            seconds = 59;
        } else if (!this.state.alerted){
			this.setState({
				alerted: true
			});
		}

        this.setState({
            hours: hours.toString(),
            minutes: (minutes >= 10) ? minutes.toString() : "0" + minutes.toString(),
			seconds: (seconds >= 10) ? seconds.toString() : "0" + seconds.toString(),
			running: hours * 3600 + minutes * 60 + seconds
		});
		
    }.bind(this);
}

export default Timer;
