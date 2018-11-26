import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'

export default class MainList extends Component {
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
      <FlatList
        data={this.state.articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginBottom: 10, }}>
            <Image
              style={{ width: 100, height: 80 }}
              source={{
                uri: item.urlToImage,
              }}
            />
            <View style={{ padding: 10, flex: 1, }}>
              <Text
                numberOfLines={1}
                style={{ marginBottom: 10 }}
                ellipsizeMode="tail"
              >{item.title}</Text>
              <Text numberOfLines={2}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({})
