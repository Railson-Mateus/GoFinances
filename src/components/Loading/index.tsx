import { ActivityIndicator } from "react-native";

import THEMES from "../../global/styles/theme";

import { styles } from "./styles";

const Loading = () => {
  return (
    <ActivityIndicator
      style={styles.container}
      color={THEMES.colors.secondary}
      size={THEMES.fontSize.xg}
    />
  );
};

export default Loading;
