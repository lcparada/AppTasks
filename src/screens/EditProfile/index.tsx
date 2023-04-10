import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={27} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          source={require("./imgs/profilephoto.png")}
          style={styles.img}
        ></Image>
        <TouchableOpacity>
          <Text style={styles.textHeader}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.name}>
          <Text style={styles.textName}>First name:</Text>
          <TextInput
            style={styles.inputName}
            placeholder="Lucas"
            cursorColor="#476C9B"
          ></TextInput>
        </View>

        <View style={styles.name}>
          <Text style={styles.textName}>Last name:</Text>
          <TextInput
            style={styles.inputName}
            placeholder="Parada"
            cursorColor="#476C9B"
          ></TextInput>
        </View>

        <View style={styles.email}>
          <Text style={styles.textEmail}>Email:</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder="loparada@gmail.com"
            cursorColor="#476C9B"
          ></TextInput>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
