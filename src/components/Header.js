import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left}>
          <Entypo name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={{ color: '#fff', fontSize: 18 }}>홈화면</Text>
        </View>
        <TouchableOpacity style={styles.right}>
          <FontAwesome name="user" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#BE658B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  right: {
    paddingLeft: 20,
    paddingRight: 20,
  }
});
