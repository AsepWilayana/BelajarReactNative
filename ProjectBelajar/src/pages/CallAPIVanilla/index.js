import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const CallAPIVanilla = () => {
  useEffect(() => {
    // call API method Get
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => console.log(json));

    // Call Api Method Post
    const dataForAPI = {
      name: 'Asep',
      job: 'developer',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallAPIVanila</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 5},
});
