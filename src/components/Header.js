import React from 'react';

import { View, Text } from 'react-native';
import styles from '../styles/headerStyle/header'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () =>
    <View style={styles.container}>
        <Text style={styles.textHeader}>Notas</Text>
    </View>

export default Header;
