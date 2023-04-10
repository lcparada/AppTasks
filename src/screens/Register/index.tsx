import { useState, useContext } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

import FireBaseService from "../../services/firestore";

import { UsersContext } from "../../contexts/UserProvider";

export default function Register() {
  const { updateUids } = useContext(UsersContext);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();

  async function createAccount(emailA: string, password: string) {
    try {
      const uid = await new FireBaseService().register(emailA, password);
      updateUids(uid, firstName, lastName, email);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.textHeader}>Register</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.inputName}>
            <Text style={styles.textInput}>First name:</Text>
            <TextInput
              style={styles.input}
              cursorColor="#476C9B"
              value={firstName}
              onChangeText={setFirstName}
            ></TextInput>
          </View>
          <View style={styles.inputName}>
            <Text style={styles.textInput}>Last name:</Text>
            <TextInput
              style={styles.input}
              cursorColor="#476C9B"
              value={lastName}
              onChangeText={setLastName}
            ></TextInput>
          </View>

          <View style={styles.inputEmail}>
            <Text style={styles.textInput}>Email:</Text>
            <TextInput
              style={styles.input}
              cursorColor="#476C9B"
              value={email}
              onChangeText={setEmail}
            ></TextInput>
          </View>

          <View style={styles.inputName}>
            <Text style={styles.textInput}>Password:</Text>
            <TextInput
              style={styles.input}
              cursorColor="#476C9B"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            ></TextInput>
          </View>

          <View style={styles.buttonEnter}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => createAccount(email.trim(), password.trim())}
            >
              <Text style={styles.textButton}>Create</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.alreadyAccount}>
            <Text style={styles.textAlreadyAccount}>
              Do you already have account?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textInputAlreadyAccount}>Touch here!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
