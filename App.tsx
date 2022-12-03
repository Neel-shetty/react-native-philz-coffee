import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import LoadAssets from "./components/LoadAssets";
import { useFonts } from "expo-font";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "GothamRounded-Medium": require("./assets/fonts/GothamRounded/GothamRounded-Medium.otf"),
    "GothamRounded-Bold": require("./assets/fonts/GothamRounded/GothamRounded-Bold.otf"),
    "GothamRounded-Light": require("./assets/fonts/GothamRounded/GothamRounded-Light.otf"),
  });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
