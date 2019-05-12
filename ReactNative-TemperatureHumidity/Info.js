import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

class Info extends React.Component {

    render() {
        return (
            <View style={styles.layout}>
                <Text style={styles.title}>{this.props.city}, {this.props.country}</Text>
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
                <Image
                    style={styles.img}
                    source={require('./assets/sun.png')}
                />
            </View>
        );
    }

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
        paddingVertical: 0.08 * height,
        backgroundColor: 'skyblue',
    },

    title: {
        marginVertical: 0.008 * height,
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        //fontWeight: 'bold',
    },

    content: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'monospace',
        textAlign: 'center'
    },


    button: {
        height: 60,
        backgroundColor: '#8e74f7',
        justifyContent: 'center',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        elevation: 5,
        marginTop: 0.15 * height,
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


export default Info;
