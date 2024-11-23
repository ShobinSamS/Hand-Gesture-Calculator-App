import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value:any) => {
    if (value === 'AC') {
      setInput(''); // Clear the input
    } else if (value === 'x') {
        setInput(input.slice(0, -1)); // Remove the last character
      } else if (value === '=') {
      try {
        // Evaluate the expression
        setInput(eval(input.replace('x', '*')).toString()); // Replace 'x' with '*'
      } catch (error) {
        setInput('Error'); // Handle any errors in evaluation
      }
    } else {
      setInput((prev) => prev + value); // Append the pressed button value
    }
  };

  const buttons = [
    '+', '-', '*', '/', 'x', 'AC', '=', '.'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.inputField}>{input}</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((button) => (
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleButtonPress(button)}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',  // Position the container absolutely
      bottom: 5,            // Stick it to the bottom of the screen
      height: '20%',        // Occupy 25% of the screen height
      width: '100%',        // Full width
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderTopLeftRadius: 15,   // Optional: Round top corners
      borderTopRightRadius: 15,  // Optional: Round top corners
    },
    inputField: {
      fontSize: 15,         // Adjusted for better visibility
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      width: '80%',
      textAlign: 'right',
      backgroundColor: '#fff',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '90%',
    },
    button: {
      backgroundColor: '#ff6f61',
      width: '20%',         // Set button width
      height: 50,          // Adjusted button height for better touchability
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 24,         // Increased font size for better readability
      fontWeight: 'bold',
    },
  });