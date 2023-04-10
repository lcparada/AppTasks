import {
  Modal,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import FireBaseService from "../../services/firestore";

type IProps = {
  isEnable: boolean;
  openModal: () => void;
};

export default function AddTaskModal(props: IProps) {
  const [task, setTask] = useState<string>("");
  const [descriptionTask, setDescriptionTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  function setTaskAndDescriptionTask() {
    if (task !== "" && descriptionTask !== "") {
      new FireBaseService().isExist(
        { task, descriptionTask },
        Math.floor(Math.random() * 300).toString()
      );
      setError("");
      setTask("");
      setDescriptionTask("");
      props.openModal();
    } else {
      setError("Fields cannot be empty");
    }
  }

  return (
    <Modal animationType="slide" visible={props.isEnable}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <TouchableOpacity style={styles.back} onPress={props.openModal}>
          <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Add Task</Text>
        </View>

        <View style={styles.body}>
          <View>
            <Text style={styles.textInputTask}>Task:</Text>
            <TextInput
              style={styles.inputTask}
              placeholder="Ex: Play Valorant"
              value={task}
              onChangeText={setTask}
              cursorColor="#476C9B"
            ></TextInput>
          </View>

          <View>
            <Text style={styles.textInputTask}>Description:</Text>
            <TextInput
              style={styles.inputTaskDescription}
              placeholder="Ex: Play Valorant to upgrade my person until level 20."
              multiline={true}
              value={descriptionTask}
              onChangeText={setDescriptionTask}
              cursorColor="#476C9B"
            ></TextInput>
            <Text style={styles.error}>{error}</Text>
          </View>

          <View style={styles.buttonEnter}>
            <TouchableOpacity
              style={styles.button}
              onPress={setTaskAndDescriptionTask}
            >
              <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
