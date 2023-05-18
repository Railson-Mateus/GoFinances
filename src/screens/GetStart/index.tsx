import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, View } from "react-native";

import Button from "../../components/Button";

import { styles } from "./styles";

const GetStart = () => {
  const navigation = useNavigation();

  const openScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerText}>
        <Image style={styles.img} source={require("../../assets/icon.png")} />
        <Text style={styles.text}>
          Controle suas finanças de forma muito simples
        </Text>
      </View>
      <Button text="Clica aqui para entrar" onPress={openScreen} />
    </SafeAreaView>
  );
};

export default GetStart;
