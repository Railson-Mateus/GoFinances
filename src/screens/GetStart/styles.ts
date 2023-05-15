import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5636D3",
    gap: 92,
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  img: {
    width: 120,
    resizeMode: "contain",
  },
  text: {
    width: 279,
    fontSize: 30,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
});
