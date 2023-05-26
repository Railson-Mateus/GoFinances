import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Card from "../../components/Card";
import CardExpenses from "../../components/CardExpenses";

import { iconType, transactionType } from "../../@types/types";

import { styles } from "./styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Desenvolvimento de site",
    value: "12.000,00",
    category: "Vendas",
    icon: "dollar-sign",
    date: "13/04/2020",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Hamburgueria Pizzy",
    value: "-59,00",
    category: "Alimentação",
    icon: "coffee",
    date: "10/04/2020",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Aluguel do apartamento",
    value: "-1.200,00",
    category: "home",
    icon: "home",
    date: "27/03/2020",
  },
];

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
        decelerationRate={0.5}
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
          last={true}
        />
      </ScrollView>

      <View style={styles.listExpenses}>
        <Text style={styles.title}>Listagem</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <CardExpenses
              category={item.category}
              date={item.date}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
        />
      </View>
    </View>
  );
};

export default Home;
