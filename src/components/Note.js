import React from 'react';
import { Text, TouchableOpacity, View, ToastAndroid, Alert } from 'react-native';
import styles from '../styles/noteStyles/note'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'

const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
}

const onPressDelete = (props) => {
    Alert.alert(
        'Sua nota será deletada!',
        'Tem certeza que deseja deletá-la?',
        [
            {
                text: 'Sim',
                onPress: (() => {
                    props.setActiveNote(props.item);
                    props.deleteNote();
                })
            },
            {
                text: 'Não',
            }
        ],
        { cancelable: true },
    );
}


const Note = (props) =>
    <View style={styles.container}>
        <View style={styles.createdAt}>
            <Icon style={{ marginLeft: 5 }} name="watch-later" size={25} color="rgba(252, 252, 255, 0.5)" />
            <Text style={styles.createdAtText}>{props.item.data}</Text>
        </View>
        <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => { props.showModal.desc() }} onLongPress={() => showToast('Mostrar descrição da nota')}>
                <Text numberOfLines={2} style={styles.titleNote}>{props.item.title}</Text>
            </TouchableOpacity>
            <View style={styles.icons}>
                {console.log(props.activeNote)}
                <TouchableOpacity onPressOut={() => { props.setActiveNote(props.item); props.showModal.desc() }} onLongPress={() => showToast('Mostrar descrição da nota')}>
                    <Icon name="description" size={25} color="rgba(52, 52, 52, 0.7)" />
                </TouchableOpacity >
                <TouchableOpacity onPress={() => { props.setActiveNote(props.item); props.showModal.edit() }} onLongPress={() => showToast('Editar nota')}>
                    <Icon name="edit" size={25} color="rgba(52, 52, 52, 0.7)" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressDelete(props)} onLongPress={() => showToast('Deletar nota')}>
                    <Icon name="delete" size={25} color="rgba(52, 52, 52, 0.7)" />
                </TouchableOpacity>
            </View>
        </View>
    </View>

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);

const mapStateToProps = state => ({
    activeNote: state.activeNote
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);