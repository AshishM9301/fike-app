import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Address from './container/Address/Address';
import CategoriesSlider from './container/CategoriesSlider/CategoriesSlider';
import Search from './container/Search/Search';

type Props = {};

const App = (props: Props) => {
  let one = {
    title: 'Prime',
    imgUrl:
      'https://w7.pngwing.com/pngs/362/706/png-transparent-amazon-com-gift-card-computer-icons-retail-amazon-prime-amazon-miscellaneous-text-retail.png',
  };

  let cards = [one, one, one, one, one, one, one];

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <View style={styles.container}> */}
        <Search />
        <Address />
        <CategoriesSlider cards={cards} />
        {/* </View> */}
      </ScrollView>
      <StatusBar backgroundColor={'#8adce2'} barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
