import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../components/Header';
import { AppStyles } from '../styles/AppStyles';

interface DetailViewProps {
	selectedItem: Model.Item;
	hasHeader?: boolean;
	handleGoBack: () => void;
}

export const DetailView = (props: DetailViewProps) => {
	return <>
		{props.hasHeader && <Header handleGoBack={props.handleGoBack} />}
		<View>
			<Text style={AppStyles.text}>{props.selectedItem.name}</Text>
		</View>
	</>;
};