import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { UIContext } from '../App';
import { DetailView } from './DetailView';
import { MasterView } from './MasterView';

export const SettingsScreen = () => {
	const { UIType, setUIType } = useContext(UIContext);

	const items = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
	const [selected, setSelected] = useState<Model.Item | undefined>(undefined);

	const handleGoBack = useCallback(() => {
		switch (UIType) {
			case 'screens':
				setSelected(undefined);
				return true;
			case 'pane':
				return true;
		}
	}, [UIType]);

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', handleGoBack);
		return () => BackHandler.removeEventListener('hardwareBackPress', handleGoBack);
	}, [handleGoBack]);

	const renderViews = () => {
		switch (UIType) {
			case 'screens':
				return <>
					{selected === undefined ?
						<MasterView
							selectedItem={selected}
							items={items}
							handleItemSelect={(item: Model.Item) => setSelected(item)}
						/> :
						<DetailView
							selectedItem={selected}
							hasHeader={true}
							handleGoBack={handleGoBack}
						/>}
				</>;
			case 'pane':
				return <View style={{ flexDirection: 'row' }}>
					<MasterView
						selectedItem={selected}
						items={items}
						handleItemSelect={(item: Model.Item) => setSelected(item)}
						isReducedSize={true}
					/>
					<DetailView
						selectedItem={selected ?? items[0]}
						handleGoBack={handleGoBack}
					/>
				</View>;
			default:
				return <></>;
		}
	};

	return (
		renderViews()
	);
};
