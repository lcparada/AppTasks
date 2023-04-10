import RootRoutes from "./src/routes/Root.routes";

import { NavigationContainer } from "@react-navigation/native";

import { UpdateTaskProvider } from "./src/contexts/TaskProvider";

import { UsersProvider } from "./src/contexts/UserProvider";

import {
  useFonts,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <UpdateTaskProvider>
        <UsersProvider>
          <RootRoutes />
        </UsersProvider>
      </UpdateTaskProvider>
    </NavigationContainer>
  );
}
