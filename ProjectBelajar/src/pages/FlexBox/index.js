import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class Flexbox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//     this.state = {
//       subcriber: 1000,
//     };
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     setTimeout(() => {
//       this.setState({subcriber: 5000});
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount  ');
//   }

//   render() {
//     console.log('render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'flex-end',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//           }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang </Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
//           <Image
//             source={{uri: 'https://placeimg.com/100/100/people'}}
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//               marginRight: 14,
//               color: 'black',
//             }}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Asep Wilayana
//             </Text>
//             <Text>{this.state.subcriber} ribu subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubsriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubsriber(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubsriber(400);
  //   }, 2000);
  // }, [subscriber]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <View
          style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 14,
            color: 'black',
          }}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Asep Wilayana</Text>
          <Text>{subscriber} ribu subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
