import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from '../styles/splashScreenStyle/styles'

const src = require('../../android/app/src/main/res/drawable/icon.png')



export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() =>
            this.props.navigation.navigate('main'),
            2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#0d86d1' />
                <Text style={styles.text}>Notas</Text>
            </View>
        )
    }
}
