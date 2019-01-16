import * as tslib_1 from "tslib";
import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import screenMapping from './screens/screenMapping';
import { MainDrawerWrapper } from './components/Drawers/MainDrawerWrapper';
export var AppNavigator = createDrawerNavigator(tslib_1.__assign({}, screenMapping), {
    initialRouteName: 'Home',
    contentComponent: function (props) { return React.createElement(MainDrawerWrapper, tslib_1.__assign({}, props)); }
});
