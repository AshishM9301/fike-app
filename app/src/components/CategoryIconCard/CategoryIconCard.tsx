import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {imgUrl?: string; title: string};

const defaultProps: Props = {
  imgUrl:
    'https://w7.pngwing.com/pngs/362/706/png-transparent-amazon-com-gift-card-computer-icons-retail-amazon-prime-amazon-miscellaneous-text-retail.png',
  title: 'Hello',
};

const CategoryIconCard = (props: Props) => {
  props = {...defaultProps, ...props};

  const [imgUrl, setImgUrl] = useState(props.imgUrl);

  return (
    <View style={{marginHorizontal: 10}}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: imgUrl}}
          onError={() =>
            setImgUrl(
              'https://w7.pngwing.com/pngs/362/706/png-transparent-amazon-com-gift-card-computer-icons-retail-amazon-prime-amazon-miscellaneous-text-retail.png',
            )
          }
          style={{
            width: 50,
            height: 50,
            resizeMode: 'cover',
            borderRadius: 9999,
          }}
        />
        <Text style={{marginTop: 8, textAlign: 'center'}}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryIconCard;

const styles = StyleSheet.create({});
