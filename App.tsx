import React, { Component } from 'react'
import { View } from 'react-native'
// import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './app/AppNavigator'
import { Epub } from 'epubjs-rn'

interface Props {}
interface State {}

// const SomeContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props, State> {
	render() {
		return (
			<>
				{/* <AppNavigator />  */}
				<Epub src={'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf'} flow="scrolled" />
			</>
		)
	}
}
