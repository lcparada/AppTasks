import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    marginTop: 40,
    marginLeft: 10,
  },
  header: {
    marginTop: 100,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#476C9B",
  },
  textHeader: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
    color: "#476C9B",
  },
  body: {
    marginTop: 40,
    alignItems: "center",
  },
  name: {
    marginTop: 20,
  },
  textName: {
    fontFamily: "Lexend_400Regular",
    color: "#476C9B",
  },
  inputName: {
    width: 330,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5F7F9",
    borderWidth: 0.5,
    borderColor: "#476C9B",
    alignItems: "center",
    paddingLeft: 20,
    color: "#476C9B",
  },
  email: {
    marginTop: 20,
  },
  textEmail: {
    fontFamily: "Lexend_400Regular",
    color: "#476C9B",
  },
  inputEmail: {
    width: 330,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5F7F9",
    borderWidth: 0.5,
    borderColor: "#476C9B",
    alignItems: "center",
    paddingLeft: 20,
    color: "#476C9B",
  },
  containerButton: {
    marginTop: 50,
  },
  button: {
    width: 330,
    height: 60,
    backgroundColor: "#476C9B",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lexend_700Bold",
  },
});

export default styles;
