import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
	
		<TextInput style={estilos.visor}
		placeholder='Resultado'
		editable={false}
		value={props.resultado}
		/>
	
);

const estilos = StyleSheet.create({
	visor: {
		fontSize: 30
	}
})
