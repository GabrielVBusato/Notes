import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import noteStyle from '../styles/noteStyles/note'

export default ({item}) => 
    <TouchableOpacity onPress={() => { }} activeOpacity={0.5} style={noteStyle.container}>
        <Text style={noteStyle.title}> {item.title} {item.id} </Text>
    </TouchableOpacity>