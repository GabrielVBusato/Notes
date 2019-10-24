import React from 'react';

import { View, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from '../../styles/buttonsStyle/addNote'
import Icon from 'react-native-vector-icons/MaterialIcons';

const showToast = () => {
    ToastAndroid.show('Adicionar nova nota', ToastAndroid.SHORT);
}

const AddNote = (props) =>
    <TouchableOpacity  activeOpacity = {0.5} style={styles.container} onPress={() => {props.navigation.navigate('newNote') }}>
        <Icon name="add" size={40} color="#fff" />
    </TouchableOpacity>

export default AddNote;
