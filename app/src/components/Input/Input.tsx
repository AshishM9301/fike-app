/* eslint-disable react-native/no-inline-styles */
import * as Icon from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  placeholder?: string;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  value: any;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  multiline?: boolean;
  icon?: any;
  iconMode?: string;
  iconAction?: () => void;
  iconActionDisabled: boolean;
  iconColor: string;
};

const defaultProps: Props = {
  placeholder: 'Name',
  autoCorrect: false,
  autoFocus: false,

  multiline: false,
  value: undefined,
  onChange: function (e: NativeSyntheticEvent<TextInputChangeEventData>): void {
    throw new Error('Function not implemented.' + e.nativeEvent.text);
  },
  iconMode: 'left',
  iconAction: (): void => {},
  iconActionDisabled: false,
  iconColor: '#aaa',
};

const Input = (props: Props) => {
  props = {...defaultProps, ...props};

  const [focus, setFocus] = useState(false);

  const capitalizeFirstLetter = (a: string) => {
    return a.charAt(0).toUpperCase() + a.slice(1);
  };

  return (
    <View
      style={{
        borderWidth: focus ? 0.85 : 0.6,
        borderColor: focus ? '#000' : '#484848',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 12,
          height: 42,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        }}>
        {props.icon && props.iconMode === 'left' && (
          <FontAwesomeIcon
            icon={Icon[`fa${capitalizeFirstLetter(props.icon)}`]}
            color={props.iconColor}
          />
        )}
      </View>
      <TextInput
        style={{
          backgroundColor: '#fff',
          width: '100%',
          paddingHorizontal: 5,
          fontSize: 16,
          paddingVertical: 12,
          flex: 1,
        }}
        placeholder={props.placeholder}
        placeholderTextColor="#aaa"
        onFocus={() => setFocus(!focus)}
        autoCorrect={props.autoCorrect}
        autoFocus={props.autoFocus}
        value={props.value}
        onChange={props.onChange}
        multiline={props.multiline}
      />
      <TouchableOpacity
        onPress={props.iconAction}
        disabled={props.iconActionDisabled}
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 12,
          height: 42,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          flexDirection: 'row',
        }}>
        {props.icon && props.iconMode === 'right' && (
          <FontAwesomeIcon
            icon={Icon[`fa${capitalizeFirstLetter(props.icon)}`]}
            color={props.iconColor}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    borderRadius: 12,
    width: '100%',
    paddingHorizontal: 12,
  },
  borderFocused: {
    borderWidth: 0.85,
    borderColor: '#000',
  },
  borderUnFocused: {
    borderWidth: 0.85,
    borderColor: '#484848',
  },
});
