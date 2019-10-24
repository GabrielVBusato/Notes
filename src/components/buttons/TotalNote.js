import React from 'react';
import { connect } from 'react-redux';

import { View, TouchableOpacity, ToastAndroid, Text } from 'react-native';
import styles from '../../styles/buttonsStyle/totalNote'
import Icon from 'react-native-vector-icons/MaterialIcons';

const showToast = () => {
    ToastAndroid.show('Total de notas', ToastAndroid.SHORT);
}


const ButtonAdd = (props) =>
    <TouchableOpacity onLongPress={showToast} activeOpacity={0.5} style={styles.container} onPress={() => { }}>
        <Icon name="notifications" size={30} color="#fff" />
        <View style={styles.badge}>
            <Text style = {styles.badgeText}> {props.notes.length} </Text>
        </View>
    </TouchableOpacity >

const mapStateToProps = state => ({
    notes: state.notes,
});

export default connect(mapStateToProps)(ButtonAdd);
