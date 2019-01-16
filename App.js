import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './app/AppNavigator';
var AppContainer = createAppContainer(AppNavigator);
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement(AppContainer, null);
    };
    return App;
}(Component));
export default App;
