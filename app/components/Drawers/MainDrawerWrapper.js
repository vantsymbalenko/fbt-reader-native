import * as tslib_1 from "tslib";
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainDrawer from './MainDrawer';
import { DrawerHeader } from '../Headers/DrawerHeader';
import { DrawerFooter } from '../Footers/DrawerFooter';
export var MainDrawerWrapper = function (props) {
    return (React.createElement(View, { style: DrawerWrapperStyles.container },
        React.createElement(DrawerHeader, null),
        React.createElement(MainDrawer, tslib_1.__assign({}, props)),
        React.createElement(DrawerFooter, null)));
};
var DrawerWrapperStyles = StyleSheet.create({
    container: {
        flex: 1
    }
});
