import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';

interface Props {
    children: ReactNode;
}

export const BodyComponent = ({ children }: Props) => {
    return <View style={stylesGLobal.containerBody}>{children}</View>;
};