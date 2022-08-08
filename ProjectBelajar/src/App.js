import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import BasicJavascript from './pages/BasicJavascript';
import Communication from './pages/Communication';
import Flexbox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import ReactNativeSvg from './pages/ReactNativeSvg';
import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent />
        <Flexbox />
        <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        <ReactNativeSvg />
      </ScrollView>
    </View>
  );
};

export default App;
