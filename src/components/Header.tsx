import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

interface IProps {
	handleGoBack: () => void;
}

export const Header = (props: IProps) => {
	return (
		<View style={styles.header}>
			<View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
				<TouchableOpacity
					onPress={props.handleGoBack}
				>
					<Image
						source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61022.png' }}
						style={styles.icon}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 60,
		width: '100%'
	},
	icon: {
		height: 22,
		width: 22,
		marginLeft: 20,
		marginRight: 30
	}
});
