import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Editable from '../../../assets/image/editable.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ReactNativeSvg</Text>
      <Editable width={244} height={125} marginTop={25} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 5},
});
