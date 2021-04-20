import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import Task from "./components/Task";

export default function App() {

	const [task, setTask] = useState(null);
	const [taskItems, setTaskItems] = useState([]);

	const addTask = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]);
		setTask(null);
	}

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	}

	return (
		<View style={styles.container}>
			<StatusBar style='auto'/>
			<SafeAreaView style={{flex: 1}}>
				<View style={styles.tasksWrapper}>
					<Text style={styles.sectionTitle}>Today's tasks</Text>
					<View style={styles.items}>
						{taskItems.length === 0 && <Text>Nothing...</Text>}
						{taskItems.map((item, index) => (
							<TouchableOpacity key={index} onPress={() => completeTask(index)}>
								<Task text={item}/>
							</TouchableOpacity>
						))}
					</View>
				</View>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.writeTaskWrapper}
				>
					<TextInput
						style={styles.input}
						placeholder={'Write a task'}
						value={task}
						onChangeText={text => setTask(text)}
					/>
					<TouchableOpacity style={styles.addWrapper} onPress={addTask}>
						<Text style={styles.addText}>+</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
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
	},
	writeTaskWrapper: {
		position: 'absolute',
		bottom: 60,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	input: {
		width: 250,
		padding: 15,
		backgroundColor: '#fff',
		borderRadius: 60,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 5,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 5,
	},
	addText: {
		color: '#55BCF6',
		fontSize: 20
	}
});
