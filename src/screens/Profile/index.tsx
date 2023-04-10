import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import { UsersContext } from "../../contexts/UserProvider";

import FireBaseService from "../../services/firestore";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

export default function Profile() {
  const navigation = useNavigation();

  const { users, userUidLogged } = useContext(UsersContext);
  const userLogged = users.find((item) => item.uid === userUidLogged);

  async function signOut() {
    try {
      await new FireBaseService().signOut();
      navigation.navigate("AuthRoutes");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.textHeader}>Profile</Text>
        <Image
          source={require("./img/profilephoto.png")}
          style={styles.img}
        ></Image>
        <View style={styles.informationProfile}>
          <Feather name="mail" size={20} color="#B8B8C4" />
          <Text style={styles.textInformationProfile}>{userLogged?.email}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.editProfile}>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Feather name="edit" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.textEditProfile}>Edit profile</Text>
        </View>

        <View style={styles.editPassword}>
          <TouchableOpacity style={styles.editPasswordButton}>
            <Feather name="lock" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.textEditPassword}>Redefine password</Text>
        </View>

        <View style={styles.informationApp}>
          <TouchableOpacity
            style={styles.informationAppButton}
            onPress={() => navigation.navigate("Information")}
          >
            <Feather name="help-circle" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.textInformationApp}>App information</Text>
        </View>

        <View style={styles.logout}>
          <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
            <Feather name="log-out" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.textLogout}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
