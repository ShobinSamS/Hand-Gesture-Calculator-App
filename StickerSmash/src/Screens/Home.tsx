import Cam from "../Components/camera"
import InstructionScreen from "../Screens/Instruction";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons"; // Import Ionicons for the icon
import Calculator from "../Components/calculator";
export default function HomeScreen() {
    const navigation = useNavigation(); // Get the navigation object

    const handleIconPress = () => {
      navigation.navigate("Instruction"); // Navigate to Instruction screen
    };
return(
<>
         <Cam /> 
          <View style={styles.iconContainer}>
            <TouchableOpacity  onPress={handleIconPress}>
            <Ionicons name="information-circle-outline" size={32} color="blue"/>
            </TouchableOpacity>
          </View>
           <Calculator />
        </>
)

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    iconContainer: {
      position: 'absolute', // Position the icon as needed
      bottom: "19%", // Adjust this value to position the icon
      left: 0, // Adjust this value to position the icon
      padding: 10, // Optional: Add padding for touchability
    },
  });
  