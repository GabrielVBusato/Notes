import React, { Component } from 'react';

import { View, FlatList, Modal, Text, StatusBar, TouchableOpacity } from 'react-native';
import styles from '../styles/listaStyle/lista'
import { TotalNote, AddNote } from '../components/buttons/index'
import footerStyle from '../styles/listaStyle/footer'
import emptyList from '../styles/listaStyle/emptyList'
import modalStyle from '../styles/listaStyle/modal'
import Note from '../components/Note'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/actions'
import { TextInput } from 'react-native-gesture-handler';




class Lista extends Component {

  state = {
    modal: false,
    editedTitle: '',
    editedDescription: '',
    mode: 'edit'
  }

  showEditModal = () => {
    this.setState({
      modal: true,
      mode: 'edit'
    })
  }

  showDescModal = () => {
    this.setState({
      modal: true,
      mode: 'desc'
    })
  }

  dismissModal = () => {
    this.setState({
      modal: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#0d86d1' />
        <Header />
        {
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modal}
            onRequestClose={() => {
              this.dismissModal()
            }}>
            <TouchableOpacity
              onPressOut={this.dismissModal} style={modalStyle.modalWrapper} activeOpacity={1}>
              <TouchableOpacity activeOpacity={1} onPress={() => { }}>
                {
                  this.state.mode === 'edit' ?
                    <View style={modalStyle.contentContainer}>
                      <Text style={modalStyle.titleText}>Editar nota</Text>
                      <View style={modalStyle.inputContainer}>
                        <Text style={modalStyle.textTitle}> Título </Text>
                        <TextInput maxLength={10} selectTextOnFocus onChangeText={(text) => {
                          this.setState({
                            ...this.state,
                            editedTitle: text
                          })
                        }} placeholder='Digite o título da nota...' style={modalStyle.inputTitle}>{this.props.activeNote.title}</TextInput>
                        <Text style={[modalStyle.textTitle, { marginTop: 10 }]}> Descrição </Text>
                        <TextInput selectTextOnFocus onChangeText={(text) => {
                          this.setState({
                            ...this.state,
                            editedDescription: text
                          })
                        }} placeholder='Digite a descrição para a nota...' maxLength={150} multiline={true} maxHeight={50} style={modalStyle.descriptionInput}>{this.props.activeNote.description}</TextInput>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <TouchableOpacity style={modalStyle.submitButton} activeOpacity={0.5} onPress={() => {
                            this.props.editNote({
                              ...this.props.activeNote,
                              title: this.state.editedTitle === '' ? this.props.activeNote.title : this.state.editedTitle,
                              description: this.state.editedDescription === '' ? this.props.activeNote.description : this.state.editedDescription
                            }); this.dismissModal()
                          }}>
                            <Text style={modalStyle.textButton}>Confirmar</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={modalStyle.submitButton} activeOpacity={0.5} onPress={this.dismissModal}>
                            <Text style={modalStyle.textButton}>Cancelar</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View> :
                    <View style={modalStyle.contentContainer}>
                      <Text style={modalStyle.titleText}>Descrição</Text>
                      <Text style={modalStyle.descriptionShow}>{this.props.activeNote.description}</Text>
                      <TouchableOpacity style={[modalStyle.submitButton, {position: 'absolute', bottom: -25, elevation: 10}]} activeOpacity={0.5} onPress={this.dismissModal}>
                        <Text style={modalStyle.textButton}>Fechar</Text>
                      </TouchableOpacity>
                    </View>}
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>}
        <FlatList
          style={{ backgroundColor: '#fff', }}
          contentContainerStyle={this.props.notes.length === 0 && { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(16, 28, 158, 0.1)' }}
          data={this.props.notes}
          renderItem={({ item }) => <Note showModal={{ edit: this.showEditModal, desc: this.showDescModal }} item={item} />}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={footerStyle.footer}
          ListEmptyComponent={
            <View style={emptyList.container}>
              <Text style={emptyList.text}> Você não possui notas!  </Text>
            </View>
          }
        />
        {/* Absolute buttons */}
        <TotalNote />
        <AddNote navigation={this.props.navigation} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  activeNote: state.activeNote
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Lista)