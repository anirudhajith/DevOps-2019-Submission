import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

var compass = {
    0: require('./assets/compass/0.png'),
    15: require('./assets/compass/15.png'),
    30: require('./assets/compass/30.png'),
    45: require('./assets/compass/45.png'),
    60: require('./assets/compass/60.png'),
    75: require('./assets/compass/75.png'),
    90: require('./assets/compass/90.png'),
    105: require('./assets/compass/105.png'),
    120: require('./assets/compass/120.png'),
    135: require('./assets/compass/135.png'),
    150: require('./assets/compass/150.png'),
    165: require('./assets/compass/165.png'),
    180: require('./assets/compass/180.png'),
    195: require('./assets/compass/195.png'),
    210: require('./assets/compass/210.png'),
    225: require('./assets/compass/225.png'),
    240: require('./assets/compass/240.png'),
    255: require('./assets/compass/255.png'),
    270: require('./assets/compass/270.png'),
    285: require('./assets/compass/285.png'),
    300: require('./assets/compass/300.png'),
    315: require('./assets/compass/315.png'),
    330: require('./assets/compass/330.png'),
    345: require('./assets/compass/345.png'),
    360: require('./assets/compass/360.png')
};


class Info extends React.Component {

    render() {
        return (
            <View style={styles.layout}>
                <View style={styles.section}>
                    <Text style={styles.title}>{this.props.json.name}, {this.props.json.sys.country}</Text>
                    <Text style={styles.content}>{this.props.json.weather[0].description}</Text>
                </View>
                <View style={styles.section}>

                    <Text style={styles.content}>Temperature: {this.props.json.main.temp}℃</Text>

                    <View style={styles.lateral}>
                        <Text style={styles.lateralContent}>Min: {this.props.json.main.temp_min}℃</Text>
                        <Text style={styles.lateralContent}>Max: {this.props.json.main.temp_max}℃</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.content}>Humidity: {this.props.json.main.humidity}%</Text>
                    <Text style={styles.content}>Pressure: {this.props.json.main.pressure} hPa</Text>
                </View>

                <View style={styles.section}>

                    <View style={styles.lateral}>
                        <View>
                            <Text style={styles.content}>Wind Speed: {this.props.json.wind.speed} m/s</Text>
                            <Text style={styles.content}>Wind Angle: {this.props.json.wind.deg}°</Text>
                        </View>
                        <Image
                            style={styles.compass}
                            source={compass[Math.round(this.props.json.wind.deg / 15) * 15]}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    {this.props.json.rain != null ?
                        <Text style={styles.content}>Rain in the last {Object.keys(this.props.json.rain)[0]}: {this.props.json.rain[Object.keys(this.props.json.rain)[0]]} mm</Text> : null}
                    <Text style={styles.content}>Cloud cover: {this.props.json.clouds.all}%</Text>
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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingHorizontal: 0.02 * height,
        //paddingVertical: 0.08 * height,
        backgroundColor: 'skyblue',
    },

    section: {
        marginVertical: 0.02 * height,
        justifyContent: 'space-evenly',
    },

    title: {
        marginTop: 0.01 * height,
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

    lateral: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    lateralContent: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'monospace',
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

    compass: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        justifyContent: 'center',
    }
});


export default Info;