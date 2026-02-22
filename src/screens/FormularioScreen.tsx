import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { InputComponent } from '../components/InputComponent';

interface Formulario {
    num1: string;
    num2: string;
}

export const FormularioScreen = () => {
    const [valores, setValores] = useState<Formulario>({
        num1: '',
        num2: '',
    });

    const [resultado, setResultado] = useState<string>('');


    const handleChangeValue = (name: string, value: string): void => {
        setValores({
            ...valores,
            [name]: value,
        });
    };

    const handleCalcular = () => {
        const n1 = parseFloat(valores.num1);
        const n2 = parseFloat(valores.num2);

        if (n1 === 0 && n2 === 0) {
            setResultado('INDETERMINACIÓN');
        } else if (n2 === 0) {
            setResultado('NO EXISTE DIVISIÓN PARA CERO');
        } else {
            const resp = n1 / n2;
            setResultado(`RESULTADO DE LA DIVISIÓN: ${resp}`);
        }
    };

    return (
        <View style={stylesGLobal.container}>
            <TitleComponent title="Formulario" />
            <BodyComponent>
                <Text style={stylesGLobal.titleWelcome}>Calculadora de divisiones</Text>

                <InputComponent
                    placeholder="Número 1"
                    keyboardType="numeric"
                    name="num1"
                    handleChangeValue={handleChangeValue}
                />

                <InputComponent
                    placeholder="Número 2"
                    keyboardType="numeric"
                    name="num2"
                    handleChangeValue={handleChangeValue}
                />

                <ButtonComponent buttonText="Calcular" onPress={handleCalcular} />

                {resultado !== '' && (
                    <Text style={stylesGLobal.titleWelcome}>{resultado}</Text>
                )}
            </BodyComponent>
        </View>

    );
};