import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import photo from '../../../assets/image/photo.jpg';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={props.image}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story title="Youtube Channel" image={photo} />
          <Story title="class Online" image={photo} />
          <Story title="class Online" image={photo} />
          <Story title="class Online" image={photo} />
          <Story title="class Online" image={photo} />
          <Story title="class Online" image={photo} />
          <Story title="class Online" image={photo} />
          <Story title="class Online" image={photo} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
