import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import THEME from "../../global/styles/theme";

import { styles } from "./styles";
import { CardProps } from "../../@types/types";

const Card = ({
  amount,
  lastTransaction,
  nameIcon,
  title,
  type,
  last,
}: CardProps) => {
  let corIcone = THEME.colors.success;

  if (type && type === "out") {
    corIcone = THEME.colors.attention;
  } else if (type === "overall") {
    corIcone = THEME.colors.shape;
  }

  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor:
            type === "overall" ? THEME.colors.secondary : THEME.colors.shape,
          marginRight: last ? 0 : 16,
        },
      ]}
    >
      <View style={styles.cardHeader}>
        <Text
          style={[
            styles.cardTitle,
            {
              color:
                type === "overall"
                  ? THEME.colors.shape
                  : THEME.colors.text_dark,
            },
          ]}
        >
          {title}
        </Text>
        <Feather name={nameIcon} size={32} color={corIcone} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardAmount}>R$ {amount}</Text>
        <Text style={styles.cardDate}>{lastTransaction}</Text>
      </View>
    </View>
  );
};

export default Card;
