import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { IButton } from "../../@types/types";

import { styles } from "./styles";

import React from "react";
import THEME from "../../global/styles/theme";

const ButtonSecondary = ({ text, icon, ...rest }: IButton) => {
  let buttonStyle = null;
  let corIcone = null;

  text === "Outcome"
    ? (corIcone = THEME.colors.attention)
    : (corIcone = THEME.colors.success);

  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Feather name={icon} size={32} color={corIcone} />
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSecondary;
