import React, { Component } from 'react'
import { View } from 'react-native'
// import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './app/AppNavigator'
import { Epub } from 'epubjs-rn'
import XMLParser from 'react-xml-parser'
var RNFS = require('react-native-fs')

interface Props {}
interface State {}

// const SomeContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props, State> {
	componentDidMount() {
		const xml = new XMLParser.parseFromString(require('./helpers/a_game_of_thrones.fb2'))
		console.log(xml)
	}
	render() {
		return (
			<>
				{/* <AppNavigator />  */}
				<Epub src={'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf'} flow="scrolled" />
			</>
		)
	}
}
