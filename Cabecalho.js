import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
	<View style={estilos.topo}>
		<Text style={estilos.txtTitulo}>Calculadora</Text>
	</View>
);

const estilos = StyleSheet.create({
	topo: {
		backgroundColor: '#8B008B',
		padding: 10,
		alignItems: 'center'
	},
	txtTitulo: {
		color: '#FFF',
		fontSize: 30
	}
})
