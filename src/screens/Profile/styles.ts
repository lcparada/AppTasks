import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: 100,
  },
  textHeader: {
    fontSize: 24,
    fontFamily: "Lexend_700Bold",
    color: "#476C9B",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#476C9B",
    marginTop: 40,
  },
  informationProfile: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    marginTop: 10,
  },
  textInformationProfile: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#B8B8C4",
  },
  body: {
    marginLeft: 30,
    marginTop: 60,
  },
  editProfile: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  editProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#476C9B",
  },
  textEditProfile: {
    fontSize: 16,
    fontFamily: "Lexend_500Medium",
    color: "black",
  },
  editPassword: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginTop: 20,
  },
  editPasswordButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#476C9B",
  },
  textEditPassword: {
    fontSize: 16,
    fontFamily: "Lexend_500Medium",
    color: "black",
  },
  informationApp: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginTop: 20,
  },
  informationAppButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#476C9B",
  },
  textInformationApp: {
    fontSize: 16,
    fontFamily: "Lexend_500Medium",
    color: "black",
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginTop: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#C6010E",
  },
  textLogout: {
    fontSize: 16,
    fontFamily: "Lexend_500Medium",
    color: "black",
  },
});

export default styles;
