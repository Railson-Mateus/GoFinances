import { StyleSheet } from "react-native";
import THEME from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputs: {
    gap: 10,
    marginTop: 26,
    marginBottom: 20,
  },
  input: {
    width: 328,
    height: 56,
    backgroundColor: THEME.colors.shape,
    borderRadius: 5,
    padding: 10,
  },
  content: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: THEME.colors.background,
    marginBottom: 20,
  },
});
