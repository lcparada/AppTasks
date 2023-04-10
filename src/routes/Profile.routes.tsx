import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Profile from "../screens/Profile";
import Information from "../screens/Information";
import EditProfile from "../screens/EditProfile";

export default function ProfileRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ProfileScreen"
    >
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
