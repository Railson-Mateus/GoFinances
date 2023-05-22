import { Text, View } from "react-native";

import { IPropsHeader } from "../../@types/types";

import { styles } from "./styles";

const Header = ({ title }: IPropsHeader) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
