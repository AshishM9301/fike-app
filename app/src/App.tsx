import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './assets/styles/global';
import Search from './container/Search/Search';

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Search />
      </View>
    </SafeAreaView>
  );
};

export default App;
