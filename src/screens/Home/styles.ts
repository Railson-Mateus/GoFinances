import { StyleSheet } from "react-native";
import THEME from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: THEME.colors.background,
  },
  containerHeader: {
    height: 278,
    backgroundColor: THEME.colors.primary,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 53,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 16,
  },
  greetingText: {
    color: THEME.colors.shape,
    fontFamily: THEME.fonts.regular,
    fontSize: THEME.fontSize.md,
  },
  name: {
    color: THEME.colors.shape,
    fontFamily: THEME.fonts.bold,
    fontSize: THEME.fontSize.md,
  },
  icon: {
    color: THEME.colors.secondary,
  },
  containerTransations: {
    position: "absolute",
    width: 335,
    marginTop: 135,
  },
});
