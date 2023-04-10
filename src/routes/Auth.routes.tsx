import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "../screens/Login";
import Register from "../screens/Register";

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
