import React from 'react';

import { View, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from '../../styles/buttonsStyle/totalNote'
import Icon from 'react-native-vector-icons/MaterialIcons';

const showToast = () => {
    ToastAndroid.show('Total de notas', ToastAndroid.SHORT);
}

const ButtonAdd = () =>
    <TouchableOpacity onLongPress={showToast} activeOpacity = { 0.5} style = { styles.container } onPress = {() => { }}>
        <Icon name="notifications" size={30} color="#fff" />
    </TouchableOpacity >

export default ButtonAdd;
