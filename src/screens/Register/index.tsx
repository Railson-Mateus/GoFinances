import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import Header from "../../components/Header";
import ButtonSecondary from "../../components/ButtonSecondary";
import { iconType } from "../../@types/types";
import Button from "../../components/Button";
import DropList from "../../components/DropList";

const Register = () => {
  return (
    <View style={styles.container}>
      <Header title="Cadastro" />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput
            placeholder="Nome"
            placeholderTextColor={"#969Cb2"}
            style={styles.input}
          />
          <TextInput
            placeholder="Preço"
            placeholderTextColor={"#969Cb2"}
            style={styles.input}
          />
        </View>
        <View style={styles.content}>
          <ButtonSecondary text="Income" icon={iconType.arrowUp} />
          <ButtonSecondary text="Outcome" icon={iconType.arrowDown} />
        </View>
        <DropList />
      </View>
      <Button text="Enviar" type="secondary" />
    </View>
  );
};

export default Register;
