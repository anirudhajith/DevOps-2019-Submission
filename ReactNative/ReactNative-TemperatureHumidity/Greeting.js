import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ActivityIndicator } from 'react-native';


class Greeting extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            submitted: false
        }
    }


    render() {

        return (
            <View style={styles.layout}>
                <Text style={styles.title}>
                    TEMPERATURE
                </Text>
                <Text style={styles.content}>
                    and
                </Text>
                <Text style={styles.title}>
                    HUMIDITY
                </Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Bangalore"
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.getWeather}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            GET WEATHER
                        </Text>

                    </TouchableOpacity>
                    {this.props.submitting ? <ActivityIndicator size="large" color="#FFA500" /> : null}

                    {this.props.notFound ? <Text style={styles.error}>Invalid City</Text> : null}


                </View>
                <Image
                    style={styles.img}
                    source={require('./assets/sun.png')}
                />
            </View>
        );
    }

    getWeather = function () {
        if (this.state.text !== "") {
            this.setState({
                submitted: true
            })
            this.props.onSubmit(this.state.text);
        }
    }.bind(this);

}


const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: 'skyblue',
    },

    title: {
        marginVertical: 5,
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        //fontWeight: 'bold',
    },

    content: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'monospace',
        textAlign: 'center'
    },


    error: {
        color: '#ffd3cc',
        margin: 5,
        fontSize: 30,
    },

    input: {
        marginTop: 40,
        borderRadius: 5,
        padding: 10,
        height: 70,
        backgroundColor: 'white',
        marginVertical: 10,
        fontSize: 30
    },

    button: {
        height: 60,
        backgroundColor: '#8e74f7',
        justifyContent: 'center',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        elevation: 5,
        marginBottom: 10,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
    },

    img: {
        position: 'absolute',
        bottom: 0,
        width: 300,
        height: 300,
    }
});

export default Greeting;