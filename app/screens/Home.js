import * as React from 'react';
import { Text, Button, View } from 'react-native';
export var Home = function (props) {
    return (React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
        React.createElement(Text, null, "this is not"),
        React.createElement(Button, { title: 'Go to details screen', onPress: function () {
                props.navigation.openDrawer();
            } })));
};
