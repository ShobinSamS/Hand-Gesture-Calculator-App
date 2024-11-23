import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SplashComponent from "../Components/splash";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home"); // Navigates to Home and removes Splash from the stack
    }, 4000); // 4000 ms = 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]);

  return <SplashComponent />;
}
