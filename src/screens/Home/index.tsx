import { View, SafeAreaView, Text, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useContext } from "react";

import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

import FloatButtom from "../../components/FloatBottom";

import AddTaskModal from "../../components/AddTaskModal";

import FireBaseService from "../../services/firestore";

import FlatlistTask from "../../components/FlatlistTask";

import { UsersContext } from "../../contexts/UserProvider";

export type TaskModel = {
  task: string;
  descriptionTask: string;
  id: string;
};

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [allTasks, setAllTasks] = useState<TaskModel[]>([]);

  const { users, userUidLogged } = useContext(UsersContext);
  const userLogged = users.find((item) => item.uid === userUidLogged);

  // useEffect(() => {
  //   console.log(users);
  //   console.log(userUidLogged);
  //   console.log(userLogged?.name);
  // }, []);

  function openModal() {
    setOpen(!open);
  }

  async function receiveData() {
    try {
      const tasks = await new FireBaseService().getDocs<TaskModel>();
      setAllTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    receiveData();
  }, [allTasks]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Image
          source={require("./img/profilephoto.png")}
          style={styles.img}
        ></Image>

        <Text style={styles.textHeader}>
          Hello,{"\n"}
          <Text style={{ color: "#476C9B", fontFamily: "Lexend_700Bold" }}>
            {userLogged?.name}
          </Text>
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.containerMainText}>
          <Text style={styles.mainTextBody}>Your tasks</Text>
        </View>
        <LinearGradient
          colors={["#476C9B", "white"]}
          style={styles.line}
        ></LinearGradient>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={allTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FlatlistTask
            task={item.task}
            descriptionTask={item.descriptionTask}
            id={item.id}
          />
        )}
      />
      <AddTaskModal isEnable={open} openModal={openModal} />
      <FloatButtom openModal={openModal} />
    </SafeAreaView>
  );
}
