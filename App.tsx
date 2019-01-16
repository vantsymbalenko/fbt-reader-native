import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './app/AppNavigator';

interface Props {}
interface State {}

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props, State> {
    render() {
        return <AppContainer />;
    }
}
