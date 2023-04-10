import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

import { UsersContext } from "../../contexts/UserProvider";

import FireBaseService from "../../services/firestore";

export default function Login() {
  const { receiveUserLogged } = useContext(UsersContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigation = useNavigation();

  async function auth(email: string, password: string) {
    try {
      const uidLogged = await new FireBaseService().signIn(email, password);
      receiveUserLogged(uidLogged);
      navigation.navigate("AppRoutes");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.header}>
          <Text style={styles.textHeader}>Login</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.inputName}>
            <Text style={styles.textInput}>Email:</Text>
            <TextInput
              style={styles.input}
              cursorColor="#476C9B"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            ></TextInput>
          </View>

          <View style={styles.inputName}>
            <Text style={styles.textInput}>Password:</Text>
            <TextInput
              style={styles.input}
              cursorColor="#476C9B"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            ></TextInput>
          </View>

          <View>
            <Text style={styles.textError}>{error}</Text>
          </View>

          <View style={styles.buttonEnter}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => auth(email, password)}
            >
              <Text style={styles.textButton}>Enter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.forgotPassword}>
            <Text style={styles.textForgotPassword}>Forgot password?</Text>
            <TouchableOpacity>
              <Text style={styles.textInputForgotPassword}>Touch here!</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textFooter}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.textInputFooter}>Touch here!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
