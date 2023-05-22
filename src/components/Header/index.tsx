import { Text, View } from "react-native";

import { styles } from "./styles";

type IProps = {
  title: string;
};

const Header = ({ title }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
