import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BottomDrawer from '../../components/BotomSheet/BottomDrawer';
import { styles } from './Address.module';

type Props = {};

const Address = (props: Props) => {
  const [isVisible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={Icon.faLocationDot} />
      <Text style={styles.text}>Address</Text>
      <TouchableOpacity onPress={()=>handleVisible()} >
        <FontAwesomeIcon icon={Icon.faChevronDown} />
      </TouchableOpacity>
      <BottomDrawer isVisible={isVisible} handleVisible={handleVisible} />
    </View>
  );
};

export default Address;
