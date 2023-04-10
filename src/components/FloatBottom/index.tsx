import { TouchableOpacity, Animated, View } from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";
// import { useState } from "react";

type IProps = {
  openModal: () => void;
};

export default function FloatButtom(props: IProps) {
  // const [open, setOpen] = useState<boolean>(false);
  // const animation = new Animated.Value(0);

  // function toggleFabButton() {
  //   const toValue = open ? 0 : 1;
  //   console.log(toValue);

  //   Animated.timing(animation, {
  //     toValue: 1,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // }

  // const rotation = {
  //   transform: [
  //     {
  //       rotate: animation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: ["0deg", "45deg"],
  //       }),
  //     },
  //   ],
  // };

  return (
    <TouchableOpacity style={styles.button} onPress={() => props.openModal()}>
      {/* <Animated.View style={rotation}> */}
      <Feather name="plus" size={35} color="white" />
      {/* </Animated.View> */}
    </TouchableOpacity>
  );
}
