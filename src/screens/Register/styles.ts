import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 150,
    marginLeft: 40,
  },
  textHeader: {
    fontSize: 30,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
  body: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  inputName: {
    marginTop: 10,
  },
  inputEmail: {
    marginTop: 10,
  },
  textInput: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
    color: "#476C9B",
    marginBottom: 2,
  },
  error: {
    textAlign: "center",
    color: "red",
    fontFamily: "Lexend_400Regular",
  },
  input: {
    width: 330,
    height: 40,
    backgroundColor: "#F5F7F9",
    borderRadius: 10,
    elevation: -3,
    borderColor: "#476C9B",
    borderWidth: 0.5,
    paddingLeft: 20,
    color: "#476C9B",
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
  alreadyAccount: {
    flexDirection: "row",
    marginTop: 15,
    columnGap: 5,
  },
  textAlreadyAccount: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#476C9B",
  },
  textInputAlreadyAccount: {
    fontSize: 14,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
});

export default styles;
