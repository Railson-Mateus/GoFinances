import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { useState } from "react";

const DateCarousel = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextDate);
  };

  const handlePreviousDate = () => {
    const previousDate = new Date(currentDate);
    previousDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(previousDate);
  };

  const formatDate = (date: Date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${month}, ${year}`;

    return formattedDate;
  };

  const isCurrentDate = (date: Date) => {
    const today = new Date();
    return (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePreviousDate}>
        <MaterialIcons name="chevron-left" size={32} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>{formatDate(currentDate)}</Text>
      <TouchableOpacity
        onPress={handleNextDate}
        disabled={isCurrentDate(currentDate)}
      >
        <MaterialIcons name="chevron-right" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default DateCarousel;
