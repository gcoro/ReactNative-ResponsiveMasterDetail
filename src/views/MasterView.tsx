import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

interface MasterViewProps {
	selectedItem?: Model.Item;
	items: Array<Model.Item>;
	handleItemSelect: (item: Model.Item) => void;
}

export const MasterView = (props: MasterViewProps) => {

	return <FlatList
		keyExtractor={(item) => item.id.toString()}
		data={props.items}
		renderItem={({ item, index }) => {
			const isFocused = props.selectedItem?.id === item.id;

			return (
				<TouchableOpacity
					onPress={() => props.handleItemSelect(item)}
				>
					<Text>
						{item.name}
					</Text>
				</TouchableOpacity>
			);
		}}
	/>;
};