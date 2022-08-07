import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import cart from '../../assets/icon/keranjang.jpg';

const Cart = props => {
  return (
    <View>
      <View style={styles.cartWrepper}>
        <Image source={cart} style={styles.iconcart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.wrepper}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartWrepper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
  iconcart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
