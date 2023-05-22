import { StyleSheet } from "react-native";
import THEMES from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 76,
    backgroundColor: THEMES.colors.shape,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  text: {
    color: THEMES.colors.text_dark,
    fontSize: THEMES.fontSize.md,
    fontWeight: "400",
    fontFamily: THEMES.fonts.regular,
  },
  valueContainer: {
    flexDirection: "row",
  },
  textValue: {
    color: THEMES.colors.text_dark,
    fontSize: THEMES.fontSize.md,
    fontWeight: "700",
    fontFamily: THEMES.fonts.regular,
  },
});
