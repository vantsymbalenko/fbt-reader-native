import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import screenMapping from './screens/screenMapping';
import { MainDrawerWrapper } from './components/Drawers/MainDrawerWrapper';

export const AppNavigator = createDrawerNavigator(
    { ...screenMapping },
    {
        initialRouteName: 'Details_Not Basic_Super Not Basic',
        contentComponent: props => <MainDrawerWrapper {...props} />
    }
);
