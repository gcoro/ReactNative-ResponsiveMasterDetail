import React, { createContext, useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { SettingsScreen } from './views/SettingsScreen';

export const UIContext = createContext({
	UIType: 'screens',
	setUIType: (type: Model.UIType) => { }
});

const App = () => {
	const [UIType, setUIType] = useState<Model.UIType>('screens');
	const value = { UIType, setUIType };

	useEffect(() => {
		const isLandscape = () => {
			const dim = Dimensions.get('window');
			return dim.width >= dim.height;
		};

		const handleResize = () => {
			isLandscape() || isTablet() ? setUIType('pane') : setUIType('screens');
		};

		handleResize();

		Dimensions.addEventListener('change', handleResize);
		return () => Dimensions.removeEventListener('change', handleResize);
	}, []);

	return (
		<>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView>
				<UIContext.Provider value={value}>
					<SettingsScreen />
				</UIContext.Provider>
			</SafeAreaView>
		</>
	);
};

export default App;
