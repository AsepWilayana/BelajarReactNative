import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import Flexbox from './pages/FlexBox';
import Position from './pages/Position';
import SampleComponent from './pages/SampleComponent';
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
        <StylingComponent /> */}
        {isShow && <Flexbox />}
        {/* <Position /> */}
      </ScrollView>
    </View>
  );
};

export default App;
