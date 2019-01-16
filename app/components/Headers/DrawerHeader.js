import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
export var DrawerHeader = function (props) {
    return (React.createElement(View, { style: DrawerHeaderStyles.view },
        React.createElement(Image, { style: DrawerHeaderStyles.imageLogo, source: require("../../assets/reader.png") })));
};
var DrawerHeaderStyles = StyleSheet.create({
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
