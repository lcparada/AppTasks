import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import FireBaseService from "../../services/firestore";

import { UpdateTaskContext } from "../../contexts/TaskProvider";

interface IProps {
  isEnable: boolean;
  openOrCloseModal: () => void;
}

export default function EditModalTask(props: IProps) {
  const { idTaskUpdate } = useContext(UpdateTaskContext);

  const [task, setTask] = useState<string>("");
  const [descriptionTask, setDescriptionTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function updateTask() {
    await new FireBaseService().updateDoc(idTaskUpdate, task, descriptionTask);
    props.openOrCloseModal();
  }

  return (
    <Modal animationType="slide" visible={props.isEnable}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <TouchableOpacity style={styles.back} onPress={props.openOrCloseModal}>
          <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Edit Task</Text>
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
              onPress={() => updateTask()}
            >
              <Text style={styles.textButton}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
