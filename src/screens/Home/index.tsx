import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import Card from "../../components/Card";
import { iconType, transactionType } from "../../@types/types";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const closeScreen = () => {
    navigation.navigate("GetStart");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <View style={styles.containerInfo}>
            <Image
              style={styles.img}
              source={{
                uri: "https://avatars.githubusercontent.com/u/73662972?v=4",
              }}
            />
            <View>
              <Text style={styles.greetingText}>Olá</Text>
              <Text style={styles.name}>Railson Mateus</Text>
            </View>
          </View>
          <TouchableOpacity onPress={closeScreen}>
            <MaterialCommunityIcons
              name="logout"
              size={32}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        style={styles.containerTransations}
      >
        <Card
          amount="17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          nameIcon={iconType.arrowUp}
          title="Entradas"
          type={transactionType.entry}
        />
        <Card
          amount="1.259,00"
          lastTransaction="Última saída dia 04 de abril"
          nameIcon={iconType.arrowDown}
          title="Entradas"
          type={transactionType.out}
        />
        <Card
          amount="16.141,00"
          lastTransaction="01 à 04 de abril"
          nameIcon={iconType.dollarSign}
          title="Entradas"
          type={transactionType.overall}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
