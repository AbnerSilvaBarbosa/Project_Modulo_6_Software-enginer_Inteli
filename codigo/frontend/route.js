import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "./pages/tab";
import Login from "./pages/Login";
import { Shop } from "./pages/feedshop";
import { NewComer } from "./pages/newcomer";
import { Thread } from "./pages/thread";

const Stack = createNativeStackNavigator()

export function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
            headerBackVisible: false, title: ''
        })}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="NewComer" component={NewComer} options={{headerShown: false}} />
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name="Start" component={Tabs} options={{ headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }} />
            <Stack.Screen name="Thread" component={Thread} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}