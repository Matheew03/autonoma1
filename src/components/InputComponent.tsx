import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';

interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions; // opcional
    name: string; 
    handleChangeValue: (name: string, value: string) => void; // captura valores
}

export const InputComponent = ({ placeholder, keyboardType, handleChangeValue, name }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChangeValue(name, value)} // captura en console.log
            style={stylesGLobal.input}
        />
    );
};