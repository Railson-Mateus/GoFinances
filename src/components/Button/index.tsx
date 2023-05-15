import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { IButton } from "../../@types/types";

import { styles } from "./styles";

import React from "react";

const Button = ({ type, text, ...rest }: IButton) => {
  let buttonStyle = null;
  let textStyle = null;

  if (type === "secondary") {
    buttonStyle = StyleSheet.flatten(styles.secondaryButton);
    textStyle = StyleSheet.flatten(styles.secondaryTextButton);
  }

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...rest}>
      <Text style={[styles.textButton, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
