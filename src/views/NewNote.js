import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
import newNote from '../styles/newNoteStyle/newNote'

class NewNote extends Component {
    state = {
        isTextFocused: false,
        isTextAreaFocused: false,
    }

    render() {
        const { container, content, titleText, titleInput, descriptionInput, submitButton, textButton } = newNote;
        return (
            <View style={container}>
                <KeyboardAvoidingView behavior="padding" style={content}>
                    <Text style={titleText} > Título da nota</Text>
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
                        }} placeholder='Título' autoFocus = {true} style={[titleInput,
                            this.state.isFocused ? { borderColor: 'black' } : { borderColor: 'gray' }]} />
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
                        }} placeholder='Descrição' style={[descriptionInput,
                            this.state.isTextAreaFocused ? { borderColor: 'black' } : { borderColor: 'gray' }]} />
                    <TouchableOpacity style={submitButton} activeOpacity={0.5} onPress={() => { }}>
                        <Text style={textButton}> Criar nota</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}


export default NewNote;