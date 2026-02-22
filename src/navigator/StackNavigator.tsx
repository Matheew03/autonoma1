import { createStackNavigator } from "@react-navigation/stack";
import { PRIMARY_COLOR } from "../commons/constants";
import { BienvenidosScreen } from "../screens/BienvenidosScreen";
import { FormularioScreen } from "../screens/FormularioScreen";

export type RootStackParamList = {
    Bienvenidos: undefined;
    Formulario: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Bienvenidos"
            screenOptions={{
                cardStyle: { backgroundColor: PRIMARY_COLOR },
                headerShown: false,
            }}
        >
            <Stack.Screen name="Bienvenidos" component={BienvenidosScreen} />
            <Stack.Screen name="Formulario" component={FormularioScreen} />
        </Stack.Navigator>
    );
};
