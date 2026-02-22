import React from 'react';
import { Text } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    return <Text style={stylesGLobal.title}>{title}</Text>;
};