/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';

import Header from 'components/Header';
import MainBanner from 'components/MainBanner';
import MainList from 'components/MainList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Header />
          <MainBanner />
          <MainList />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
