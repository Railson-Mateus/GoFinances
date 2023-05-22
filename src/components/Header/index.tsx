import { Text, View } from "react-native";

import { IProps } from "../../@types/types";

import { styles } from "./styles";

const Header = ({ title }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
