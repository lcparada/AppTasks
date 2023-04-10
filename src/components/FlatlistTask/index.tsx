import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import FireBaseService from "../../services/firestore";

import EditModalTask from "../EditModalTask";

import { useState, useContext } from "react";

import { UpdateTaskContext } from "../../contexts/TaskProvider";

interface IProps {
  task: string;
  descriptionTask: string;
  id: string;
}

export default function FlatlistTask(props: IProps) {
  const { updateTasks } = useContext(UpdateTaskContext);
  const [openModal, setOpenModal] = useState<boolean>(false);

  function openOrCloseModal() {
    setOpenModal(!openModal);
  }

  async function deleteTask(data: string) {
    await new FireBaseService().deletDoc(data);
  }

  function updateTaskToContext(id: string) {
    updateTasks(id);
    openOrCloseModal();
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.task}>
          <Text style={styles.title}>{props.task}</Text>
          <Text style={styles.description}>{props.descriptionTask}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => updateTaskToContext(props.id)}>
            <Feather name="edit" size={24} color="#476C9B" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(props.id)}>
            <Feather name="trash-2" size={24} color="#C6010E" />
          </TouchableOpacity>
        </View>
      </View>
      <EditModalTask isEnable={openModal} openOrCloseModal={openOrCloseModal} />
    </View>
  );
}
