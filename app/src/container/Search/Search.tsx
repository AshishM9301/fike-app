import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '../../components/Input/Input';
import {styles} from './Search.module';

import * as Icon from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Search = (props: Props) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search..."
        iconActionDisabled={false}
        onChange={e => {
          setSearchText(e.nativeEvent.text);
        }}
        value={searchText}
        icon="search"
        iconAction={() => {}}
        iconMode="right"
      />
      <View style={styles.mic}>
        <FontAwesomeIcon icon={Icon.faMicrophone} color="#fff" size={20} />
      </View>
    </View>
  );
};

export default Search;
