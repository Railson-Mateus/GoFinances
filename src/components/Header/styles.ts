import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 114,
    alignItems: "center",
    //    justifyContent: "center",
    backgroundColor: THEMES.colors.primary,
  },
  text: {
    color: THEMES.colors.shape,
    fontSize: THEMES.fontSize.md,
    fontWeight: "400",
    fontFamily: THEMES.fonts.regular,
    marginTop: 55,
  },
});
