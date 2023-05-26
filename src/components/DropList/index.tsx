import { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";

const DropList = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={styles.container}>
      <Picker
        style={styles.dropList}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Casa" value="Casa" />
        <Picker.Item label="Carro" value="Carro" />
        <Picker.Item label="Alimentação" value="Alimentação" />
        <Picker.Item label="Venda" value="Venda" />
      </Picker>
    </View>
  );
};

export default DropList;
