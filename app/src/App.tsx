import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Address from './container/Address/Address';

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <Address />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
