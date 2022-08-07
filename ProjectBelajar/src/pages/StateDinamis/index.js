import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

function StateDinamis() {
  return (
    <View style={styles.wrepper}>
      <Text style={styles.textTitle}>State Dinamis</Text>
      <Text style={styles.titleSection}>function component (Hooks)</Text>
      <Counter />
      <Counter />
      <Text style={styles.titleSection}>class component (Hooks)</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
}

export default StateDinamis;

const styles = StyleSheet.create({
  wrepper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },

  titleSection: {
    marginTop: 20,
  },
});
