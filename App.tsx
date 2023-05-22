import Loading from "./src/components/Loading";

import Routes from "./src/routes";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { SafeAreaView } from "react-native-safe-area-context";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {fontsLoaded ? <Routes /> : <Loading />}
    </SafeAreaView>
  );
};

export default App;
