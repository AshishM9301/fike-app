import {View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input/Input';

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Search = (props: Props) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View>
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
    </View>
  );
};

export default Search;
