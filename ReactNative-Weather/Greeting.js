import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ActivityIndicator, Dimensions} from 'react-native';


class Greeting extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            submitted: false,
            emptySubmit: false
        }
    }

    render() {

        return (
            <View style={styles.layout}>
                <Text style={styles.title}>
                    WEATHER
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
                    {this.props.submitting ? <ActivityIndicator size="large" color="#ffee03" /> : null}

                    {this.props.notFound ? <Text style={styles.error}>Invalid City</Text> : null}
                    {this.state.emptySubmit ? <Text style={styles.error}>Please enter a city name</Text> : null}

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
                submitted: true,
                emptySubmit: false
            })
            this.props.onSubmit(this.state.text);
        } else {
            this.setState({
                emptySubmit: true,
                submitted: false
            });
        }
    }.bind(this);

}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingHorizontal: 0.02 * height,
        paddingVertical: 0.06 * height,
        backgroundColor: 'skyblue',
    },

    title: {
        marginVertical: 0.004 * height,
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        //fontWeight: 'bold',
    },


    error: {
        color: '#ffee03',
        margin: 5,
        fontSize: 30,
    },

    input: {
        //marginTop: 0.04 * height,
        borderRadius: 5,
        padding: 10,
        height: 70,
        backgroundColor: 'white',
        marginVertical: 0.04 * height,
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
        width:  0.9 * width,
        resizeMode:'contain',
        justifyContent: 'center',
        //height: 0.6 * width,
    }
});

export default Greeting;