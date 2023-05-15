import { StyleSheet } from "react-native";
import THEME from "../../global/styles/theme";

export const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 26,
    paddingTop: 19,
    marginRight: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: THEME.fontSize.sm,
    fontFamily: THEME.fonts.regular,
  },
  cardContent: {
    marginTop: 40,
  },
  cardAmount: {
    fontSize: THEME.fontSize.xg,
    fontFamily: THEME.fonts.bold,
  },
  cardDate: {
    fontSize: THEME.fontSize.sm,
    fontFamily: THEME.fonts.regular,
  },
});
