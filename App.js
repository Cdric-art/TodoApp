import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto'/>
			<SafeAreaView>
				<View style={styles.tasksWrapper}>
					<Text style={styles.sectionTitle}>Today's tasks</Text>
					<View style={styles.items}>
						<Task text={'Task 1'}/>
						<Task text={'Task 2'}/>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
	},
	tasksWrapper: {
		paddingTop: Platform.OS === 'ios' ? 20 : 60,
		paddingHorizontal: 20
	},
	sectionTitle: {
		fontSize: Platform.OS === 'ios' ? 28 : 24,
		fontWeight: 'bold'
	},
	items: {
		marginTop: 30
	}
});
