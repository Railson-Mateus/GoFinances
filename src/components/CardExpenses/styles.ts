import { StyleSheet } from "react-native";
import THEME from "../../global/styles/theme";

export const styles = StyleSheet.create({
  cardExpenses: {
    height: 138,
    width: 328,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 24,
    marginVertical: 10,
  },
  cardHeader: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: THEME.fontSize.sm,
    fontFamily: THEME.fonts.regular,
    color: THEME.colors.title,
  },
  value: {
    fontSize: THEME.fontSize.ld,
    fontFamily: THEME.fonts.regular,
  },
  secondaryText: {
    color: THEME.colors.attention,
  },
  text: {
    color: THEME.colors.success,
  },
  cardFooter: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  textCategory: {
    fontSize: THEME.fontSize.sm,
    color: THEME.colors.text,
  },
  date: {
    fontSize: THEME.fontSize.sm,
    fontFamily: THEME.fonts.regular,
    color: THEME.colors.text,
  },
});
