import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export var DrawerFooter = function (props) {
    return (React.createElement(View, { style: DrawerFooterStyles.container },
        React.createElement(Text, { style: DrawerFooterStyles.text }, "Copyright \u00A9 2019. All rights reserved."),
        React.createElement(Text, { style: DrawerFooterStyles.text }, "Version - 0.0.1")));
};
var DrawerFooterStyles = StyleSheet.create({
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
