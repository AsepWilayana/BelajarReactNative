import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import macbook from '../../assets/image/photo.jpg';

const Product = props => {
  return (
    <View>
      <View style={styles.wrepper}>
        <Image source={macbook} style={styles.imageProduct} />
        <Text style={styles.ProductName}>New Macbook Pro 2020</Text>

        <Text style={styles.ProductPrice}>Rp. 25.000.000</Text>
        <Text style={styles.location}>Bandung</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrepper}>
            <Text style={styles.buttonText}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrepper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  ProductName: {fontSize: 14, fontWeight: 'bold', marginTop: 12},
  ProductPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 16,
  },
  location: {fontSize: 12, fontWeight: '500', marginTop: 12},
  buttonWrepper: {
    backgroundColor: '#6FCF97',
    // paddingTop: 6,
    // paddingBottom: 6,
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
