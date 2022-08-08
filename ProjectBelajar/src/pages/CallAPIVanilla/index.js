import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });
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

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
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
      .then(json => {
        console.log(json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallAPIVanila</Text>
      <Button title="GET DATA" onPress={getData}></Button>
      <Text>Response Get Data</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData}></Button>
      <Text>Response POST Data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 5},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});
