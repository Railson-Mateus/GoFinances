import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import THEME from "../../global/styles/theme";

import { styles } from "./styles";
import { IPropsCardExpenses } from "../../@types/types";

const CardExpenses = ({
  category,
  date,
  icon,
  title,
  value,
}: IPropsCardExpenses) => {
  let textStyle = null;
  let valueInt = parseInt(value);
  valueInt < 0
    ? (textStyle = StyleSheet.flatten(styles.secondaryText))
    : (textStyle = StyleSheet.flatten(styles.text));

  return (
    <View style={styles.cardExpenses}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.value, textStyle]}>R$ {value}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.icon}>
          {icon} {category}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default CardExpenses;
