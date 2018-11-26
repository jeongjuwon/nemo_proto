import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

export default class MainBanner extends Component {
  state = {
    articles: [],
  }

  componentWillMount() {
    this.fetch();
  }

  fetch = async () => {

    const key = "e40c9540da594621a4e0e3349a197c63";
    const baseUrl = "https://newsapi.org/v2/everything";
    const query = "마이크로닷";

    const url = `${baseUrl}?q=${query}&sortBy=publishedAt&apiKey=${key}`;

    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      console.log(responseJson);

      this.setState({
        articles: responseJson.articles
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={{ height: 200, }}>
        <Swiper style={styles.wrapper} showsButtons={true}>
        {this.state.articles.slice(0, 5).map((article, index) => {
          return (
            <View style={styles.slide1} key={index}>
              <Image
                style={{ height: 200 }}
                aspectRatio={ 491 / 688 }
                resizeMode={"cover"}
                source={{uri: article.urlToImage }}
              />
              <View style={{ position: 'absolute', bottom: 100 }}>
                <Text style={styles.text}>{article.title}</Text>
              </View>
            </View>
          )
        })}
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    // flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
