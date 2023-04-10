import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
    marginLeft: 30,
    columnGap: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: "#476C9B",
  },
  textHeader: {
    fontSize: 18,
    fontFamily: "Lexend_300Light",
    color: "black",
  },
  body: {
    marginTop: 50,
    alignItems: "center",
  },
  containerMainText: {
    paddingHorizontal: 30,
  },
  mainTextBody: {
    fontSize: 26,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
  line: {
    width: 190,
    height: 3,
  },
});

export default styles;
