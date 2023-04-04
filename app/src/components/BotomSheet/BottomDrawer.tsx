import { BottomSheet } from '@rneui/base';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Props = {
  isVisible: boolean;
  handleVisible: () => void;
};

const defaultProps: Props = {
  isVisible: false,
  handleVisible: function (): void {
    throw new Error('Function not implemented.');
  },
};

const BottomDrawer = (props: Props) => {
  props = {...defaultProps, ...props};

  const {isVisible, handleVisible} = props;

  return (
    <SafeAreaView>
    <BottomSheet isVisible={isVisible} onBackdropPress={()=>handleVisible}>
      <View>
        <Text>Hello</Text>
      </View>
    </BottomSheet>
    </SafeAreaView>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({});
