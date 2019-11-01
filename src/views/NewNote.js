import React, { Component } from 'react';
import { Alert, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import newNote from '../styles/newNoteStyle/newNote'
import { connect } from 'react-redux';
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'

class NewNote extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        isTextFocused: false,
        isTextAreaFocused: false,
        title: '',
        description: '',
        isLoading: false,
        editable: true,
    }

    addNotePress = () => {
        if (this.state.description === '' || this.state.title === '') {
            Alert.alert(
                'Erro ao criar nota!',
                'Preencha os campos obrigatórios.',
                [
                    { text: 'OK' },
                ],
                { cancelable: true },
            );
        } else {
            this.setState({
                ...this.state,
                editable: false,
                isLoading: true,
            })
            setTimeout(() => {
                this.props.addNote({
                    title: this.state.title, description: this.state.description,
                    data: `Criado dia ${new Date().getDate()}/${new Date().getMonth() + 1} as ${new Date().getHours()}h e ${new Date().getMinutes()} minutos`,
                    index: this.props.index
                });
                this.props.navigation.goBack();
            }, 1);
        }
    }

    render() {
        const { container, content, titleText, titleInput, descriptionInput, submitButton, textButton } = newNote;
        return (
            <View style={container}>
                <KeyboardAvoidingView behavior="padding" enabled style={content}  >
                    <Text style={titleText}> Título da nota <Text style={{ color: 'red' }}>*</Text> </Text>
                    <TextInput
                        placeholderTextColor='rgba(52, 52, 52, 0.6)'
                        maxLength={20}
                        selectTextOnFocus
                        editable={this.state.editable}
                        onFocus={() => {
                            this.setState({
                                isFocused: true,
                            })
                        }}
                        onBlur={() => {
                            this.setState({
                                isFocused: false,
                            })
                        }} placeholder='Digite o título da nota...' style={[titleInput,
                            this.state.isFocused ? { borderColor: 'black' } : { borderColor: 'gray' }]}
                        onChangeText={(text) => {
                            this.setState({
                                ...this.state,
                                title: text
                            })
                        }} />
                    <Text style={titleText} > Descrição <Text style={{ color: 'red' }}>*</Text> </Text>
                    <TextInput maxLength={150} selectTextOnFocus multiline numberOfLines={3} onFocus={() => {
                        this.setState({
                            isTextAreaFocused: true,
                        })
                    }}

                        placeholderTextColor='rgba(52, 52, 52, 0.6)'
                        editable={this.state.editable}
                        onBlur={() => {
                            this.setState({
                                isTextAreaFocused: false,
                            })
                        }} onChangeText={(text) => {
                            this.setState({
                                ...this.state,
                                description: text
                            })
                        }} placeholder='Digite a descrição para a nota...' style={[descriptionInput,
                            this.state.isTextAreaFocused ? { borderColor: 'black' } : { borderColor: 'gray' }]} />
                    <TouchableOpacity disabled={this.state.isLoading} style={submitButton} activeOpacity={0.5} onPress={this.addNotePress}>
                        {
                            this.state.isLoading ? <ActivityIndicator color="#fff" size='large' /> : <Text style={textButton}> Criar nota</Text>
                        }
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    activeNote: state.activeNote,
    index: state.index,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(NewNote);