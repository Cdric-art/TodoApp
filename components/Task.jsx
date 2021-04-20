import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = ({text}) => {
	return (
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.square}/>
				<Text style={styles.itemText}>{text}</Text>
			</View>
			<View style={styles.circular}/>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		padding: 15,
		marginBottom: 20,
		borderRadius: 10
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	square: {
		width: 24,
		height: 24,
		backgroundColor: "#55BCF6",
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15
	},
	itemText: {
		maxWidth: '80%',
	},
	circular: {
		width: 12,
		height: 12,
		borderColor: '#55BCF6',
		borderWidth: 2,
		borderRadius: 5,
	}
})

export default Task;
