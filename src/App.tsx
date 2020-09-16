import React, { createContext } from 'react';
import { Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { SettingsScreen } from './views/SettingsScreen';

const isLandscape = () => {
	const dim = Dimensions.get('screen');
	return dim.width >= dim.height;
};

export const UITypes = {
	twoPane: 'twoPane',
	twoScreens: 'twoScreens'
};

export const MasterDetailContext = createContext(isTablet() ? UITypes.twoPane : UITypes.twoScreens);

const App = () => {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView>
				<SettingsScreen />
			</SafeAreaView>
		</>
	);
};

export default App;
