import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';

interface Props {
    buttonText: string;
    onPress: () => void;
}

export const ButtonComponent = ({ buttonText, onPress }: Props) => {
    return (
        <TouchableOpacity style={stylesGLobal.button} onPress={onPress}>
            <Text style={stylesGLobal.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};