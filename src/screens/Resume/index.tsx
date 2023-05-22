import { ScrollView, View } from "react-native";

import Header from "../../components/Header";
import DateCarousel from "../../components/DateCarousel";
import CardCategory from "../../components/CardCategory";

import { styles } from "./styles";

const Resume = () => {
  return (
    <View style={styles.container}>
      <Header title="Resumo por categoria" />
      <DateCarousel />
      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate={0.5}
        style={styles.scroll}
      >
        <CardCategory category="Casa" value="1.200" />
        <CardCategory category="Carro" value="700" />
        <CardCategory category="Alimentação" value="900" />
        <CardCategory category="Escola" value="500" />
      </ScrollView>
    </View>
  );
};

export default Resume;
