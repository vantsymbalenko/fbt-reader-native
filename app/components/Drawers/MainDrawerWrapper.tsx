import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainDrawer, { MainDraweProps } from './MainDrawer';
import { DrawerHeader } from '../Headers/DrawerHeader';
import { DrawerFooter } from '../Footers/DrawerFooter';

export const MainDrawerWrapper = (props: MainDraweProps) => {
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
