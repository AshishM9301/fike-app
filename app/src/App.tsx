import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Address from './container/Address/Address';
import Search from './container/Search/Search';

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
      {/* <View style={styles.container}> */}
        <Search />
        <Address />
      {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
