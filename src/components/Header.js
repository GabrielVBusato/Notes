import React from 'react';

import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles/headerStyle/header'
import LinearGradient from 'react-native-linear-gradient'

const Header = () =>
    <View style={styles.container}>
        <Text style={styles.textHeader}> Notas, dia {new Date().getDate()}/{new Date().getMonth() + 1} </Text>
    </View>

export default Header;
