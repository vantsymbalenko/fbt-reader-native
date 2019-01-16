import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DrawerFooter = (props: {}) => {
  return (
    <View style={DrawerFooterStyles.container}>
      <Text style={DrawerFooterStyles.text}>Copyright © 2019. All rights reserved.</Text>
      <Text style={DrawerFooterStyles.text}>Version - 0.0.1</Text>
    </View>
  );
};

const DrawerFooterStyles = StyleSheet.create({
  container: {
    height: 100,
    borderTopColor: '#adadad',
    borderTopWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10
  },
  text: {
    color: "#adadad"
  }
});
