import {StyleSheet, Dimensions} from 'react-native';
import {DEVICE_HEIGHT} from '../../config/config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: DEVICE_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: 15,
    // alignItems:'center'
  },
});
