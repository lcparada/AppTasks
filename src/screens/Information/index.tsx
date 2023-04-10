import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

export default function Information() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={27} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Feather name="alert-circle" size={30} color="#476C9B" />
        <Text style={styles.headerText}>App information</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.mainTextBody}>What is the app?</Text>
        <Text style={styles.textBody}>
          The Task app is a digital tool designed to help users manage and
          organize their daily tasks, weekly or monthly. With this application,
          users can create tasks that will always be saved.
        </Text>

        <Text style={styles.mainTextBody}>When the app was born?</Text>
        <Text style={styles.textBody}>
          The app was born in 2023 with the idea of ​improving their daily
          lives, and after a while I saw other people using the app to improve
          their daily lives, it was interesting
        </Text>
      </View>
    </SafeAreaView>
  );
}
