import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';
import { RootStackParamList } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';



type Props = StackScreenProps<RootStackParamList, 'Screen1'>;

export const Screen1 = ({ navigation }: Props) => {

return (
    <View style={stylesGLobal.container}>

    <Text style={stylesGLobal.title}>Bienvenido</Text>

    <View style={stylesGLobal.containerBody}>

        <Text style={stylesGLobal.titleWelcome}>
        Aplicaciones móviles
        </Text>

        <Image
        source={{
            uri: 'https://www.comunicare.es/wp-content/uploads/2021/11/app-marketing.jpg'
        }}
        style={stylesGLobal.image}
        />

        <TouchableOpacity
        style={stylesGLobal.button}
        onPress={() => navigation.navigate('Screen2')}
        >
        <Text style={stylesGLobal.buttonText}>
            Acceder
        </Text>
        </TouchableOpacity>

    </View>

    </View>
);
};