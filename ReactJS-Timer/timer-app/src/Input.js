import React from 'react';
import './Input.css';

class Input extends React.Component {

	constructor() {
        super();
        this.state = {
            hourValidity: false,
            minuteValidity: false,
            secondValidity: false,
            validity: false,

            hourValue: 0,
            minuteValue: 0,
            secondValue: 0
        };
    }

    render() {

        var validity = this.state.validity;
        var element = (
            <form name="durationForm" className="form-group" onChange={(event) => this.setValidity(event)}>

                <div className="row">
                    <label>Hours: </label> 
                    <input type="number" min = "0" name="hours" className="form-control"></input>
                </div>
                
                <div className="row">
                    <label>Minutes: </label> 
                    <input type="number" min = "0" max = "59" name="minutes" className="form-control"></input>
                </div>
                
                <div className="row">
                    <label>Seconds: </label> 
                    <input type="number" min = "0" max = "59" name="seconds" className="form-control"></input>
                </div>
                {
                    validity ? <button className="btn btn-primary" onClick={this.start.bind(this)} >START</button> : <button className="btn btn-secondary" disabled>START</button>
                }
            </form>
		);

		return element;
    }

    setValidity = function(event) {

        var name = event.target.name;
        var value = event.target.value;

        var hourValidity = this.state.hourValidity;
        var minuteValidity = this.state.minuteValidity;
        var secondValidity = this.state.secondValidity;
        var hourValue = this.state.hourValue;
        var minuteValue = this.state.minuteValue;
        var secondValue = this.state.secondValue;

        if (name === "hours") {

            if (!isNaN(value) && parseInt(value) >= 0) {
                hourValidity = true;
            } else {
                hourValidity = false;
            }
            hourValue = value;
        
        } else if (name === "minutes") {
        
            if (!isNaN(value) && parseInt(value) >= 0 && parseInt(value) < 60) {
                minuteValidity = true;
            } else {
                minuteValidity = false;
            }
            minuteValue = value;
        
        } else if (name === "seconds") {
        
            if (!isNaN(value) && parseInt(value) >= 0 && parseInt(value) < 60) {
                secondValidity = true;
            } else {
                secondValidity = false;
            }
            secondValue = value;

        }

        this.setState({
            hourValidity: hourValidity,
            minuteValidity: minuteValidity,
            secondValidity: secondValidity,
            validity: hourValidity && minuteValidity && secondValidity,

            hourValue: hourValue,
            minuteValue: minuteValue,
            secondValue: secondValue
        }, function() {
            console.log(this.state);
        });

    }.bind(this);

    start = function() {
        this.props.submitFunction(
            this.state.hourValue,
            this.state.minuteValue, 
            this.state.secondValue
        );
    }.bind(this);

    componentDidMount() {
        console.log(this);
    }

    componentWillUnmount() {

    }

}

export default Input;
