import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BasicJavascript = () => {
  // primitive
  const name = 'asep wilayana';
  let age = 26;
  const apakahLakiLaki = true;

  // complex dalam object
  const hewanPeliharaan = {
    name: 'miaw',
    jenis: 'kucing',
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  };

  // function
  const sapaOrang = (name, age) => {
    return console.log(`hello ${name} usia anda ${age}`);
  };

  sapaOrang('asep', 26);

  const namaOrang = ['asep', 'kakang', 'saefulloh']; //array

  typeof namaOrang; // object

  if ((hewanPeliharaan.name = 'miaw')) {
    console.log('hello miaw');
  } else {
    console.log('hewan siapa ini?');
  }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if ((objectHewan.name = 'miaw')) {
    //   hasilSapa = 'hallo miaw';
    // } else {
    //   hasilSapa = 'ini hewan siapa';
    // }
    // return hasilSapa;

    return objectHewan.name === 'budi' ? 'hallo miaw' : 'ini hewan siapa';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}> BasicJavascript</Text>
      <Text> Name = {name}</Text>
      <Text> Age = {age}</Text>
      <Text> Laki-Laki = {apakahLakiLaki}</Text>
      <Text> {sapaHewan(hewanPeliharaan)} </Text>
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
