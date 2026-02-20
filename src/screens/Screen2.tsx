import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { InputComponent } from '../components/InputComponent';
import { stylesGLobal } from '../Theme/appTheme';

type Props = StackScreenProps<RootStackParamList, 'Screen2'>;

export const Screen2 = ({ navigation }: Props) => {

    // Función que captura los valores de los campos en console.log
    const handleChangeValue = (name: string, value: string): void => {
        console.log(name, value);
    };

    return (
        <View style={stylesGLobal.container}>
            <Text style={stylesGLobal.title}>Formulario</Text>

            <View style={stylesGLobal.containerBody}>
                <Text style={stylesGLobal.titleWelcome}>Ingrese los datos</Text>

                <InputComponent
                    placeholder="Campo número 1"
                    name="campo1"
                    handleChangeValue={handleChangeValue}
                    keyboardType="default"
                />

                <InputComponent
                    placeholder="Campo número 2"
                    name="campo2"
                    handleChangeValue={handleChangeValue}
                    keyboardType="default"
                />
            </View>
        </View>
    );
};