import { StyleSheet } from "react-native";

import Loading from "./src/components/Loading";

import Routes from "./src/routes";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  return !fontsLoaded ? <Loading /> : <Routes />;
};

export default App;
