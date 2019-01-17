import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainDrawer, { MainDrawerProps } from './MainDrawer';
import { DrawerHeader } from '../Headers/DrawerHeader';
import { DrawerFooter } from '../Footers/DrawerFooter';

export const MainDrawerWrapper = (props: MainDrawerProps) => {
  return (
    <View style={DrawerWrapperStyles.container}>
      <DrawerHeader />
      <MainDrawer {...props} />
      <DrawerFooter />
    </View>
  );
};

const DrawerWrapperStyles = StyleSheet.create({
  container: {
    flex: 1
  }
});
