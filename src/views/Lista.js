import React, { Component } from 'react';

import { View, FlatList, Animated } from 'react-native';
import styles from '../styles/listaStyle/lista'
import Header from '../components/Header'
import { TotalNote, AddNote } from '../components/buttons/index'
import footerStyle from '../styles/listaStyle/footer'
import emptyList from '../styles/listaStyle/emptyList'
import Note from '../components/Note'

const notas = [
  {
    id: 1,
    title: 'teste'
  },
  {
    id: 2,
    title: 'teste'
  },
  {
    id: 3,
    title: 'teste'
  },
  {
    id: 4,
    title: 'teste'
  },
  {
    id: 5,
    title: 'teste'
  },
  {
    id: 6,
    title: 'teste'
  },
  {
    id: 7,
    title: 'teste'
  }
]



export default class Lista extends Component {

  animated = new Animated.Value(0);

  animate() {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  componentDidMount() {
    if (notas.length === 0) {
      this.animate()
    }
  }

  render() {
    const opacity = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1]
    });

    const translateX = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-500, 1]
    });

    const transform = [{ translateX }];

    return (
      <View style={styles.container}>
        <Header />
        <View style={{ flex: 1, backgroundColor: 'transparent', borderTopLeftRadius: 60, overflow: 'hidden' }}>
          <FlatList
            style={[{backgroundColor: '#fff'}, notas.length != 0 && {paddingTop: 5 }]}
            contentContainerStyle={notas.length === 0 && {flexGrow:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.2)'}}
            data={notas}
            renderItem={({item}) => <Note item = {item}/>}
            keyExtractor={({ id }, index) => id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={footerStyle.footer}
            ListEmptyComponent={
              <View style={emptyList.container}>
                <Animated.Text style={[emptyList.text, { transform, opacity }]}> Você não possui notas!  </Animated.Text>
              </View>
            }
          />
        </View>
        {/* Absolute buttons */}
        <TotalNote />
        <AddNote navigation = {this.props.navigation}/>
      </View>
    )
  }
}

