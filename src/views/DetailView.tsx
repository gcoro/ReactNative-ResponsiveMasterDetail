import React from 'react';
import { Text, View } from 'react-native';

interface DetailViewProps {
	selectedItem: Model.Item;
}

export const DetailView = (props: DetailViewProps) => {
	return <View>
		<Text>{props.selectedItem.name}</Text>
	</View>;
};