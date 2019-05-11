import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

class Info extends React.Component {

    render() {
        return (
            <View style={styles.layout}>
                <Text style={styles.title}>{this.props.city}</Text>
                <View>
                    <Text style={styles.content}>Temperature: {this.props.temperature}℃</Text>
                    <Text style={styles.content}>Humidity: {this.props.humidity}%</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.onReturn}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        BACK
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
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
        color: 'red',
        margin: 5,
        fontSize: 20

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
    button2: {
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
        marginVertical: 10

    },

    buttonText: {
        //fontFamily: 'Helvetica',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
    }
});


export default Info;