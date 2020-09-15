import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { DetailView } from './views/DetailView';
import { MasterView } from './views/MasterView';

const App = () => {
	const items = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
	const [selected, setSelected] = useState<Model.Item | undefined>(undefined);

	return (
		<>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView>
				{selected === undefined ?
					<MasterView
						selectedItem={selected}
						items={items}
						handleItemSelect={(item: Model.Item) => setSelected(item)}
					/> :
					<DetailView selectedItem={selected} />}
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({

});

export default App;
