import { createStackNavigator } from "@react-navigation/stack";

import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";

const Stack = createStackNavigator();

export default function RootRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="AuthRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
      <Stack.Screen name="AppRoutes" component={AppRoutes} />
    </Stack.Navigator>
  );
}
