import React from 'react';
import {ScrollView, View} from 'react-native';
import CategoryIconCard from '../../components/CategoryIconCard/CategoryIconCard';

type Props = {cards: any};

const CategoriesSlider = (props: Props) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{paddingHorizontal: 12, paddingVertical: 10}}>
      {props.cards.map((item, index) => (
        <CategoryIconCard title={item?.title} imgUrl={item?.imgUrl} />
      ))}
      <View style={{marginHorizontal: 12}} />
    </ScrollView>
  );
};

export default CategoriesSlider;
