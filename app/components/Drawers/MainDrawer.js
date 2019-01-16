import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import { evaluateOuterDrawerListItems } from '../../../helpers/routeHelpers';
// need input and output checking
var NavigationButton = function (props) {
    return (React.createElement(TouchableOpacity, { style: MainDrawerStyles.navButtonContainer, onPress: props.onPress },
        React.createElement(Text, { style: MainDrawerStyles.navButtonText }, props.item),
        props.isShowGoDeeperArrow && React.createElement(Icon, { name: "right", size: 32, color: "#dadada" })));
};
var MainDrawer = /** @class */ (function (_super) {
    tslib_1.__extends(MainDrawer, _super);
    function MainDrawer(props) {
        var _this = _super.call(this, props) || this;
        _this.findParent = function (generalStructure, currentItems) {
            var keys = Object.keys(generalStructure);
            for (var i = 0; i < keys.length; ++i) {
                if (generalStructure[keys[i]].children === currentItems) {
                    return generalStructure;
                }
                else if (Object.keys(generalStructure[keys[i]].children).length) {
                    return _this.findParent(generalStructure[keys[i]].children, currentItems);
                }
            }
        };
        _this.toggleMainDrawer = function () {
            _this.setState({
                currentItems: _this.findParent(_this.generatedDependencies, _this.state.currentItems)
            });
        };
        _this.renderMainDrawerComponent = function (mainDrawerItems) {
            return Object.keys(mainDrawerItems).map(function (item) {
                if (!Object.keys(mainDrawerItems[item].children).length) {
                    return (React.createElement(NavigationButton, { key: item, onPress: function () { return _this.navigateToCallback(mainDrawerItems[item].name); }, item: item }));
                }
                return (React.createElement(NavigationButton, { key: item, isShowGoDeeperArrow: true, onPress: function () {
                        _this.setState({
                            currentItems: mainDrawerItems[item].children
                        });
                    }, item: item }));
            });
        };
        _this.navigateToCallback = function (routeName) {
            _this.setState({ currentItems: _this.generatedDependencies });
            var navigationAction = NavigationActions.navigate({
                routeName: routeName
            });
            _this.props.navigation.dispatch(navigationAction);
        };
        _this.generatedDependencies = evaluateOuterDrawerListItems(props.items);
        _this.state = {
            mainDrawer: true,
            currentItems: _this.generatedDependencies,
            currentComponent: {}
        };
        return _this;
    }
    MainDrawer.prototype.render = function () {
        var _this = this;
        var currentItems = this.state.currentItems;
        return (React.createElement(ScrollView, null,
            JSON.stringify(this.state.currentItems) !==
                JSON.stringify(this.generatedDependencies) && (React.createElement(View, null,
                React.createElement(TouchableOpacity, { style: MainDrawerStyles.navButtonContainer, onPress: function () { return _this.toggleMainDrawer(); } },
                    React.createElement(Icon, { name: "left", size: 32, color: "#dadada" }),
                    React.createElement(Text, { style: [MainDrawerStyles.navButtonText, MainDrawerStyles.navBackButton] }, "Back button")))),
            this.renderMainDrawerComponent(currentItems)));
    };
    return MainDrawer;
}(Component));
export default MainDrawer;
var MainDrawerStyles = StyleSheet.create({
    navButtonContainer: {
        borderBottomColor: "#dadada",
        borderBottomWidth: 1,
        alignItems: "center",
        padding: 15,
        flexDirection: "row"
    },
    navButtonText: {
        flex: 1,
        fontSize: 18,
        color: "#ababab"
    },
    navBackButton: {
        paddingLeft: 20
    }
});
