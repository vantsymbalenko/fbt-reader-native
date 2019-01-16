import React, { Component } from 'react'
import { DrawerItemsProps, NavigationActions } from 'react-navigation'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { EvaluetedOuterDrawerListItems } from '../../../helpers/routeHelpers'
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign'

import { evaluateOuterDrawerListItems } from '../../../helpers/routeHelpers'

type MainDrawerState = {
	mainDrawer: boolean
	currentComponent: EvaluetedOuterDrawerListItems
	currentItems: EvaluetedOuterDrawerListItems
}

export interface MainDrawerProps extends DrawerItemsProps {}

//props for NavigationButton
type NavigationButtonProps = {
	item: string
	onPress: () => void
	isShowGoDeeperArrow?: boolean
}

// need input and output checking
const NavigationButton = props => {
	return (
		<TouchableOpacity style={MainDrawerStyles.navButtonContainer} onPress={props.onPress}>
			<Text style={MainDrawerStyles.navButtonText}>{props.item}</Text>
			{props.isShowGoDeeperArrow && <Icon name="right" size={32} color="#dadada" />}
		</TouchableOpacity>
	)
}

export default class MainDrawer extends Component<MainDrawerProps, MainDrawerState> {
	private readonly generatedDependencies: EvaluetedOuterDrawerListItems

	constructor(props) {
		super(props)
		this.generatedDependencies = evaluateOuterDrawerListItems(props.items)
		this.state = {
			mainDrawer: true,
			currentItems: this.generatedDependencies,
			currentComponent: {}
		}
	}

	private findParent: (
		generalStructure: EvaluetedOuterDrawerListItems,
		currentItems: EvaluetedOuterDrawerListItems
	) => EvaluetedOuterDrawerListItems = (generalStructure, currentItems) => {
		const keys = Object.keys(generalStructure)
		for (let i = 0; i < keys.length; ++i) {
			if (generalStructure[keys[i]].children === currentItems) {
				return generalStructure
			} else if (Object.keys(generalStructure[keys[i]].children).length) {
				return this.findParent(generalStructure[keys[i]].children, currentItems)
			}
		}
	}

	private toggleMainDrawer: () => void = () => {
		this.setState({
			currentItems: this.findParent(this.generatedDependencies, this.state.currentItems)
		})
	}

	private renderMainDrawerComponent = mainDrawerItems => {
		return Object.keys(mainDrawerItems).map(item => {
			if (!Object.keys(mainDrawerItems[item].children).length) {
				return (
					<NavigationButton
						key={item}
						onPress={() => this.navigateToCallback(mainDrawerItems[item].name)}
						item={item}
					/>
				)
			}
			return (
				<NavigationButton
					key={item}
					isShowGoDeeperArrow={true}
					onPress={() => {
						this.setState({
							currentItems: mainDrawerItems[item].children
						})
					}}
					item={item}
				/>
			)
		})
	}

	private navigateToCallback: (routeName: string) => void = routeName => {
		this.setState({ currentItems: this.generatedDependencies })
		const navigationAction = NavigationActions.navigate({
			routeName: routeName
		})
		this.props.navigation.dispatch(navigationAction)
	}

	public render() {
		const { currentItems } = this.state

		return (
			<ScrollView>
				{JSON.stringify(this.state.currentItems) !== JSON.stringify(this.generatedDependencies) && (
					<View>
						<TouchableOpacity
							style={MainDrawerStyles.navButtonContainer}
							onPress={() => this.toggleMainDrawer()}
						>
							<Icon name="left" size={32} color="#dadada" />
							<Text style={[MainDrawerStyles.navButtonText, MainDrawerStyles.navBackButton]}>
								Back button
							</Text>
						</TouchableOpacity>
					</View>
				)}
				{this.renderMainDrawerComponent(currentItems)}
			</ScrollView>
		)
	}
}

const MainDrawerStyles = StyleSheet.create({
	navButtonContainer: {
		borderBottomColor: '#dadada',
		borderBottomWidth: 1,
		alignItems: 'center',
		padding: 15,
		flexDirection: 'row'
	},
	navButtonText: {
		flex: 1,
		fontSize: 18,
		color: '#ababab'
	},
	navBackButton: {
		paddingLeft: 20
	}
})
