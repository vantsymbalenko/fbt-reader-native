import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const DrawerHeader = props => {
  return (
    <View style={DrawerHeaderStyles.view}>
      <Image style={DrawerHeaderStyles.imageLogo} source={require("../../assets/reader.png")}/>
    </View>
  );
};

const DrawerHeaderStyles = StyleSheet.create({
  view: {
    height: 100,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    justifyContent: 'center'
  },
  imageLogo: {
    marginTop: 20,
    height: 79,
    width: "100%"
  }
});
