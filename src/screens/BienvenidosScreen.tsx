import React from 'react';
import { View, Text, Image } from 'react-native';
import { RootStackParamList } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGLobal } from '../Theme/appTheme';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';

type Props = StackScreenProps<RootStackParamList, 'Bienvenidos'>;

export const BienvenidosScreen = ({ navigation }: Props) => {
    return (
        <View style={stylesGLobal.container}>
            <TitleComponent title="Bienvenido" />

            <BodyComponent>
                <Text style={stylesGLobal.titleWelcome}>Aplicaciones móviles</Text>

                <Image
                    source={{
                        uri: 'https://www.comunicare.es/wp-content/uploads/2021/11/app-marketing.jpg',
                    }}
                    style={stylesGLobal.image}
                />


                <ButtonComponent
                    buttonText="Acceder"
                    onPress={() => navigation.navigate('Formulario')}
                />
            </BodyComponent>
        </View>
    );
};