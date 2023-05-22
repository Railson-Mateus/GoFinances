import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    alignItems: "center",
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  text: {
    width: 160,
    textAlign: "center",
    color: THEMES.colors.text_dark,
    fontSize: THEMES.fontSize.ld,
    fontWeight: "400",
    fontFamily: THEMES.fonts.regular,
  },
});
