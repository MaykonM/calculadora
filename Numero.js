import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
	<TextInput 
	style={estilos.numero}
	value={props.num}
	onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)}
	/>
);

const estilos = StyleSheet.create({
	numero: {
		width: 140, 
		height: 50, 
		fontSize: 26, 
		borderColor: 'gray', 
		borderWidth: 1,
		marginBottom: 8
	}
});
