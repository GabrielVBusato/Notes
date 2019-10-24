import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
import newNote from '../styles/newNoteStyle/newNote'
import { connect } from 'react-redux';
import * as Actions from '../actions/addNote'
import { bindActionCreators } from 'redux'

class NewNote extends Component {
    state = {
        isTextFocused: false,
        isTextAreaFocused: false,
        title: '',
        description: ''
    }

    render() {
        console.log(this.props.notes)
        const { container, content, titleText, titleInput, descriptionInput, submitButton, textButton } = newNote;
        return (
            <View style={container}>
                <KeyboardAvoidingView behavior="padding" style={content}  >
                    <Text style={titleText}> Título da nota </Text>
                    <TextInput
                        onFocus={() => {
                            this.setState({
                                isFocused: true,
                            })
                        }}
                        onBlur={() => {
                            this.setState({
                                isFocused: false,
                            })
                        }} placeholder='Título' style={[titleInput,
                            this.state.isFocused ? { borderColor: 'black' } : { borderColor: 'gray' }]}
                        onChangeText={(text) => {
                            this.setState({
                                ...this.state,
                                title: text
                            })
                        }} />
                    <Text style={titleText} > Descrição </Text>
                    <TextInput selectTextOnFocus multiline numberOfLines={5} onFocus={() => {
                        this.setState({
                            isTextAreaFocused: true,
                        })
                    }}
                        onBlur={() => {
                            this.setState({
                                isTextAreaFocused: false,
                            })
                        }} onChangeText={(text) => {
                            this.setState({
                                ...this.state,
                                description: text
                            })
                        }} placeholder='Descrição' style={[descriptionInput,
                            this.state.isTextAreaFocused ? { borderColor: 'black' } : { borderColor: 'gray' }]} />
                    <TouchableOpacity style={submitButton} activeOpacity={0.5} onPress={() => { this.props.addNote({ title: this.state.title, description: this.state.description }) }}>
                        <Text style={textButton}> Criar nota</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
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



export default connect(mapStateToProps, mapDispatchToProps)(NewNote);