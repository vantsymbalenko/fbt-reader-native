import * as React from 'react'
import { Text, View, Button } from 'react-native'
var RNFS = require('react-native-fs')

export default class Details extends React.Component {
	browseFiles = () => {
		console.log('this is log')
		RNFS.readDir(RNFS.MainBundlePath).then(result => {
			console.log('result', result)
		})
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text>this is details route</Text>
				<Button title={'Go to Home screen'} onPress={this.browseFiles} />
			</View>
		)
	}
}
