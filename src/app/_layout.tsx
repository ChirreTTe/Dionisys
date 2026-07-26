import "./global.css";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Lora-Regular": require("../../assets/fonts/Lora-Regular.ttf"),
    "Lora-Medium": require("../../assets/fonts/Lora-Medium.ttf"),
    "Lora-Bold": require("../../assets/fonts/Lora-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
