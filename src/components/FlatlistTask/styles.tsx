import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    marginTop: 30,
    width: 250,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#99A0A8",
  },
  icons: {
    flexDirection: "row",
    columnGap: 15,
    marginLeft: 50,
  },
});

export default styles;
