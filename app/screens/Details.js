import * as tslib_1 from "tslib";
import * as React from 'react';
import { Text, View, Button } from 'react-native';
var RNFS = require('react-native-fs');
var Details = /** @class */ (function (_super) {
    tslib_1.__extends(Details, _super);
    function Details() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.browseFiles = function () {
            console.log("this is log");
            RNFS.readDir(RNFS.MainBundlePath)
                .then(function (result) {
                console.log("result", result);
            });
        };
        return _this;
    }
    Details.prototype.render = function () {
        return (React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            React.createElement(Text, null, "this is details route"),
            React.createElement(Button, { title: 'Go to Home screen', onPress: this.browseFiles })));
    };
    return Details;
}(React.Component));
export default Details;
;
