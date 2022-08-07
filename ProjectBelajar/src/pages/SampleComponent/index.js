import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'blue'}} />
      <Text>Hello World</Text>
      <Wily />
      <Photo />
      <Text>Hello World2</Text>
      <Text>Hello World3</Text>
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Wily = () => {
  return <Text>Asep Wilayana</Text>;
};
const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 80, height: 80}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 80, height: 80, borderRadius: 25}}
        />
        <Text style={{color: 'green', fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
