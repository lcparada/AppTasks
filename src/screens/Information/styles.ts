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
    marginTop: 70,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
  body: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  mainTextBody: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
  textBody: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
    color: "#929292",
  },
});

export default styles;
