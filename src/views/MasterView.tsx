import React, { useContext } from 'react';
import { AppState, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { AppStyles } from '../styles/AppStyles';

interface MasterViewProps {
	selectedItem?: Model.Item;
	items: Array<Model.Item>;
	handleItemSelect: (item: Model.Item) => void;
	isReducedSize?: boolean;
}

export const MasterView = (props: MasterViewProps) => {

	return <View style={{ width: props.isReducedSize ? '40%' : '100%' }}>
		<FlatList
			keyExtractor={(item) => item.id.toString()}
			data={props.items}
			renderItem={({ item, index }) => {
				const isSelected = (props.selectedItem?.id === item.id) ||
					(props.isReducedSize && !props.selectedItem && index === 0);

				return (
					<TouchableOpacity
						onPress={() => props.handleItemSelect(item)}
						style={[AppStyles.listItem, isSelected && AppStyles.selected]}
					>
						<Text style={AppStyles.text}>
							{item.name}
						</Text>
					</TouchableOpacity>
				);
			}}
		/>
	</View>;
};