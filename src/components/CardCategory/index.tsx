import { Text, View } from "react-native";

import { styles } from "./styles";

import { IPropsCategory } from "../../@types/types";

const CardCategory = ({ category, value }: IPropsCategory) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.text}>R$ </Text>
        <Text style={styles.textValue}>{value}</Text>
      </View>
    </View>
  );
};

export default CardCategory;
