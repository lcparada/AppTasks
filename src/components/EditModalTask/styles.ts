import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    marginTop: 10,
    marginLeft: 10,
  },
  header: {
    marginTop: 100,
    marginLeft: 30,
  },
  textHeader: {
    fontSize: 30,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
  body: {
    marginTop: 40,
    marginLeft: 30,
    rowGap: 20,
  },
  textInputTask: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
    color: "#476C9B",
  },
  inputTask: {
    width: 330,
    height: 40,
    backgroundColor: "#F5F7F9",
    borderRadius: 10,
    elevation: -2,
    borderColor: "#476C9B",
    borderWidth: 0.5,
    paddingLeft: 20,
  },
  inputTaskDescription: {
    width: 330,
    height: 80,
    backgroundColor: "#F5F7F9",
    borderRadius: 10,
    elevation: -2,
    borderColor: "#476C9B",
    borderWidth: 0.5,
    paddingLeft: 20,
    alignItems: "center",
    paddingBottom: 30,
    paddingRight: 20,
  },
  error: {
    color: "red",
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    marginLeft: 80,
    paddingTop: 10,
  },
  buttonEnter: {
    marginTop: 30,
  },
  button: {
    width: 330,
    height: 60,
    backgroundColor: "#476C9B",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    fontFamily: "Lexend_700Bold",
    color: "white",
  },
});

export default styles;
