import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { PRIMARY_COLOR } from '../commons/constants';

export type RootStackParamList = {
Screen1: undefined;
Screen2: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
return (
    <Stack.Navigator
    initialRouteName="Screen1"
    screenOptions={{
        cardStyle: { backgroundColor: PRIMARY_COLOR },
        headerShown: false,
    }}
    >
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
);
}
